/**
    https://leetcode.com/problems/sudoku-solver/

    We are not returning anthing fromt this funtion.
    Modify the board in place.
 */
var solveSudoku = function (board) {
  recur(board, 0, 0);
};

const recur = function (board, row, col) {
  if (col === board.length) {
    col = 0;
    row++;

    if (row === board.length) {
      return true;
    }
  }

  if (board[row][col] !== '.') {
    return recur(board, row, col + 1);
  }

  for (let value = 1; value <= board.length; value++) {
    const charToPlace = value.toString(); // we are comparing the string.
    if (canPlaceValue(board, row, col, charToPlace)) {
      board[row][col] = charToPlace;
      if (recur(board, row, col + 1)) return true;
      board[row][col] = '.';
    }
  }
  return false;
};

const canPlaceValue = function (board, row, col, value) {
  // check all the row in this col
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === value) {
      return false;
    }
  }

  // check all the col in this row
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  // Check region constraints - get the size of the sub-box
  const regionSize = Math.sqrt(board.length);

  const verticalBoxIndex = Math.floor(row / regionSize);
  const horizontalBoxIndex = Math.floor(col / regionSize);

  const topLeftOfSubBoxRow = Math.floor(regionSize * verticalBoxIndex);
  const topLeftOfSubBoxCol = Math.floor(regionSize * horizontalBoxIndex);
  for (let i = 0; i < regionSize; i++) {
    for (let j = 0; j < regionSize; j++) {
      if (value === board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) {
        return false;
      }
    }
  }

  return true;
};
