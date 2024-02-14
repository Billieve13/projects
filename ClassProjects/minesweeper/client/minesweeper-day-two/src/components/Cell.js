import React from 'react';
import { MineColors } from '../util/MineColors';
import '../App.css';
import Circle from './Circle';
// import { chexPattern } from '../util/MineColors';
// import { bombChexPattern } from '../util/MineColors';

export const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "d7b899";
  } else {
    return "e5c29f";
  }
}

export const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "aad571";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "a2d249";
  } else {
    return "aad571";
  }
}

export  const numColorCode = (num) => {
  if (num === 1) {
    return "1976d2";
  } else if (num === 2) {
    return "388e3c";
  } else if (num === 3) {
  return "d33030";
  } else if (num === 4) {
    return "7c21a2";
  } else if (num === 5) {
    return "1976d2";
  } else if (num === 6) {
    return "1976d2";
  } else if (num === 7) {
    return "1976d2";
  } else {
    return "white";
  }
};

export default function Cell({ details, updateFlag, revealCell }) {
  const cellStyle = {
    background: details.revealed
      ? details.value === "X"
        ? MineColors()
        : bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
    color: numColorCode(details.value),
  }

  return (
    <div
    onContextMenu={(event) => updateFlag(event, details.x, details.y)}
    onClick={() => revealCell(details.x, details.y)}
    style={cellStyle}
    className="cellStyle"
    >
      {!details.revealed && details.flagged
        ? ( "🚩"
        ) : details.revealed && details.value !== 0 ? (
        details.value === "X"
        ? ( <Circle />
        ) : ( details.value
        )
        ) : ( ""
      )}
      {/* {details.value !== 0 && details.details} */}
    </div>
  );
}