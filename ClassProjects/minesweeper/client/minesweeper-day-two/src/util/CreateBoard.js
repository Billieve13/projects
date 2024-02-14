
export default (rows, cols, bombs) => { {//may need to be export default (rows, cols, bombs) => {
  let board = [];
  let mineLocation = [];

  // x column
  for (let x = 0; x < rows; x++) {
    let subCol = [];
    for (let y = 0; y < cols; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        //neighbors: 0,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol);
  }

  // Random bomb placement
  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = randomNum(0, rows - 1);
    let y = randomNum(0, cols - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      bombsCount++;
    }
  }

  //adding numbers
  for (let roww = 0; roww < rows; roww++) {
    for (let coll = 0; coll < cols; coll++) {
      if (board[roww][coll].value === "X") {
        continue;
      }

      //top
      if (roww > 0 && board[roww - 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      if(roww > 0 && coll < cols - 1 && board[roww - 1][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      //right
      if (coll < cols - 1 && board[roww][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      //bottom right
      if (roww < rows - 1 && coll < cols - 1 && board[roww + 1][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      //bottom
      if (roww < rows - 1 && board[roww + 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      //bottom left
      if (roww < rows - 1 && coll > 0 && board[roww + 1][coll - 1].value === "X") {
        board[roww][coll].value++;
      }

      //left
      if (coll > 0 && board[roww][coll - 1].value === "X") {
        board[roww][coll].value++;
      }

      //top left
      if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === "X") {
        board[roww][coll].value++;
      }
    }
  }
  return { board, mineLocation };
};

function randomNum(min, max) {
  //min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
