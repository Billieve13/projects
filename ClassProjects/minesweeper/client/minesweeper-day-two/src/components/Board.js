import React, { useEffect, useState } from "react";
import createBoard from "../util/CreateBoard";
import Cell from "./Cell";
import { revealed } from "../util/Reveal";
import Modal from "./Modal";
import Timer from "./Timer";

export default function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);

const freshBoard = () => {
  const newBoard = createBoard(10, 10, 10);
  setNonMineCount(10*10 - 10);
  setMineLocations(newBoard.mineLocation);
  //console.log(newBoard);//console.log to see the new board
  setGrid(newBoard.board);
};

  //component did mount
  useEffect(() => {
    freshBoard();
  }, []);

const restartGame = () => {
  freshBoard();
  setGameOver(false);
};

  //on Right Click and flag a cell
  const updateFlag = (event, x, y) => {
    //prevents the default right click behavior (drop-down menu)
    event.preventDefault();
    //deep copy of the state
    let newGrid = JSON.parse(JSON.stringify(grid));
    //console.log(newGrid[x][y]);//console.log to get the value of the cell
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
    //console.log("Right click");//console.log to ensure right click is working correctly
  }

  //reveal a cell
  const revealCell = (x, y) => {
    if(grid[x][y].revealed || gameOver) {
      return;
    }

    let newGrid = JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value === "X") {
      //alert('Mine Found!');
      for(let i = 0; i < mineLocations.length; i++){
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.array);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
      if(newRevealedBoard.newNonMinesCount === 0) {
        //alert('You Win!');
        setGameOver(true);
    }
  }
}

  return (
    <div>
      {/* <p>{JSON.stringify(gameOver)}={nonMineCout}</p> */}
      <p>Minesweeper</p>
      <Timer />
      <div style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        }}
      >
        {gameOver && <Modal restartGame={restartGame}/>}
        {grid.map((singleRow, index1) => {
          return (
            <div style={{display: "flex"}} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                  revealCell={revealCell}
                  details={singleBlock}
                  updateFlag={updateFlag}
                  key={index2}
                  />
                );
              })}
            </div>
            );
        })};
      </div>
    </div>
    );
  };