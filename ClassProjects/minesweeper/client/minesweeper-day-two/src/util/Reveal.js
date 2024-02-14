
export const revealed = (array, x, y, newNonMinesCount) => {
  console.log(array[x][y]);
  // if the cell is revealed
  if (array[x][y].revealed) {
    return;
  }
  // stacks of all the cells which we want to flip
  //keeping track of the 0's (empty cells) that are revealed
  if (array[x][y].flagged) {
    return;
  }

  let flipped = [];
  flipped.push(array[x][y]);//push the cell to the flipped array
  while (flipped.length !== 0) {
    let single = flipped.pop();

  if (!single.revealed) {
    newNonMinesCount--;
    single.revealed = true;
  }
  if (single.value !== 0) {
    break;
  }

  if (//Top left
    single.x > 0 &&
    single.y > 0 &&
    array[single.x - 1][single.y - 1].value === 0 &&
    !array[single.x - 1][single.y - 1].revealed
  ) {
    flipped.push(array[single.x - 1][single.y - 1]);
  }

  if (//Bottom right
    single.x < array.length - 1 &&
    single.y < array[0].length - 1 &&
    array[single.x + 1][single.y + 1].value === 0 &&
    !array[single.x + 1][single.y + 1].revealed
  ) {
    flipped.push(array[single.x + 1][single.y + 1]);
  }

  if (//Bottom Left
    single.x < array.length - 1 &&
    single.y > 0 &&
    array[single.x + 1][single.y - 1].value === 0 &&
    !array[single.x + 1][single.y - 1].revealed
  ) {
    flipped.push(array[single.x + 1][single.y - 1]);
  }
  if (//Top Right
    single.x > 0 &&
    single.y < array[0].length - 1 &&
    array[single.x - 1][single.y + 1].value === 0 &&
    !array[single.x - 1][single.y + 1].revealed
  ) {
    flipped.push(array[single.x - 1][single.y + 1]);
  }

  if (//Single ones (top)
    single.x > 0 &&
    array[single.x - 1][single.y].value === 0 &&
    !array[single.x - 1][single.y].revealed
  ) {
    flipped.push(array[single.x - 1][single.y]);
  }

  if (//Single ones (bottom)
    single.x < array.length - 1 &&
    array[single.x + 1][single.y].value === 0 &&
    !array[single.x + 1][single.y].revealed
  ) {
    flipped.push(array[single.x + 1][single.y]);
  }

  if (//Single ones (left)
    single.y > 0 &&
    array[single.x][single.y - 1].value === 0 &&
    !array[single.x][single.y - 1].revealed
  ) {
    flipped.push(array[single.x][single.y - 1]);
  }

  if (//Single ones (right)
    single.y < array[0].length - 1 &&
    array[single.x][single.y + 1].value === 0 &&
    !array[single.x][single.y + 1].revealed
  ) {
    flipped.push(array[single.x][single.y + 1]);
  }

//revealing the cells
  if (
    single.x > 0 &&
    single.y > 0 &&
    !array[single.x - 1][single.y - 1].revealed
  ) {
    //top left reveal
    array[single.x - 1][single.y - 1].revealed = true;
    newNonMinesCount--;
  }

  if (single.y > 0 && !array[single.x][single.y - 1].revealed) {
    //left reveal
    array[single.x][single.y - 1].revealed = true;
    newNonMinesCount--;
  }

  if (
    single.x < array.length - 1 &&
    single.y > 0 &&
    !array[single.x + 1][single.y - 1].revealed
  ) {
    //bottom left reveal
    array[single.x + 1][single.y - 1].revealed = true;
    newNonMinesCount--;
  }

  if (single.x > 0 && !array[single.x - 1][single.y].revealed) {
    //top reveal
    array[single.x - 1][single.y].revealed = true;
    newNonMinesCount--;
  }

  if (single.x < array.length - 1 && !array[single.x + 1][single.y].revealed) {
    //bottom reveal
    array[single.x + 1][single.y].revealed = true;
    newNonMinesCount--;
  }

  if (//top right reveal
    single.x > 0 &&
    single.y < array[0].length - 1 &&
    !array[single.x - 1][single.y + 1].revealed
  ) {
    array[single.x - 1][single.y + 1].revealed = true;
    newNonMinesCount--;
  }

  if (single.y < array[0].length - 1 && !array[single.x][single.y + 1].revealed) {
    //right reveal
    array[single.x][single.y + 1].revealed = true;
    newNonMinesCount--;
  }

  if (
    single.x < array.length - 1 &&
    single.y < array[0].length - 1 &&
    !array[single.x + 1][single.y + 1].revealed
  ) {
    //bottom right reveal
    array[single.x + 1][single.y + 1].revealed = true;
    newNonMinesCount--;
  }
}
  return { array, newNonMinesCount };
};