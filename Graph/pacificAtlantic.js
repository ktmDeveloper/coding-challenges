// https://leetcode.com/problems/pacific-atlantic-water-flow
// the idea is to do dfs from the ocean go backwards,
// and see how far that ocean can be reached from
// Then we will compare both ocean and take the common.
var pacificAtlantic = function (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  // create a new 2d array filled with 0 for pacific / atlantic
  const pacific = new Array(rowLen).fill(null).map(() => new Array(colLen).fill(0));
  const atlantic = new Array(rowLen).fill(null).map(() => new Array(colLen).fill(0));

  // top and bottom row
  for (let col = 0; col < colLen; col++) {
    dfs(matrix, 0, col, -1, pacific);
    dfs(matrix, rowLen - 1, col, -1, atlantic);
  }

  // left and right column
  for (let row = 0; row < rowLen; row++) {
    dfs(matrix, row, 0, -1, pacific);
    dfs(matrix, row, colLen - 1, -1, atlantic);
  }

  const res = [];
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      // check to see if atlantic and pacific ocean have 1
      if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

function dfs(matrix, i, j, preVal, ocean) {
  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] < preVal || ocean[i][j] === 1) {
    return;
  }
  ocean[i][j] = 1;
  dfs(matrix, i + 1, j, matrix[i][j], ocean);
  dfs(matrix, i - 1, j, matrix[i][j], ocean);
  dfs(matrix, i, j + 1, matrix[i][j], ocean);
  dfs(matrix, i, j - 1, matrix[i][j], ocean);
}
