// backtracking
// https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/

function solveKnight() {
  const board = new Array(8);
  for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
    board[i].fill(-1);
  }
  // all moves of knight combination

  const xMove = [-2, -2, -1, -1, 1, 1, 2, 2]; // knight can go these many x boxes
  const yMove = [-1, 1, -2, 2, -2, 2, -1, 1]; // for each x pos, knight can then go positive or negative of alternate 1 or 2
  if (solveKnightRecur(0, 0, 1, board, xMove, yMove)) {
    return board;
  }
  return false;
}

function solveKnightRecur(x, y, moveI, board, xMove, yMove) {
  if (moveI == 64) { // there are 64 boxes, so if all boxes fill then return true
    return true;
  }
  for (let i = 0; i < 8; i++) {
    const nextX = x + xMove[i];
    const nextY = y + yMove[i];
    if (nextX >= 0 && nextX < board.length && nextY >= 0 && nextY < board.length && board[nextX][nextY] == -1) {
      board[nextX][nextY] = moveI;
      if (solveKnightRecur(nextX, nextY, moveI + 1, board, xMove, yMove)) {
        return true;
      }
      board[nextX][nextY] = -1;
    }
  }
  return false;
}

console.log(solveKnight());
