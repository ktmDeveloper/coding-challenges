// backtracking

function mazeRat(maze) {
  const sol = new Array(maze.length);
  for (let i = 0; i < maze.length; i++) {
    sol[i] = new Array(maze[0].length);
    sol[i].fill(0);
  }

  if (mazeRatRecur(0, 0, maze)) {
    return sol;
  }
  return null;


  function mazeRatRecur(i, j, maze) {
    if (i == maze.length - 1 && j == maze[0].length - 1) {
      sol[i][j] = 1;
      return true;
    }

    if (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] == 1) {
      sol[i][j] = 1;
      return mazeRatRecur(i + 1, j, maze) || mazeRatRecur(i, j + 1, maze);
    }
    return false;
  }
}

const maze = 		[[1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1]];
console.log(mazeRat(maze));
