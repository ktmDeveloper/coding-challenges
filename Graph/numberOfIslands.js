//https://leetcode.com/problems/number-of-islands/description/

// do a DFS when you encounter '1'. Change cells containing '1' that are adjacent horizontally and verticall from to '0'
var numIslands = function(grid) {
     let count = 0;
     for(let i = 0; i < grid.length; i++){
          for(let j = 0; j < grid[0].length; j++){
            let el = grid[i][j];
            if(el == 1){
                count++;
                numIslandsDFS(grid, i, j);
            }
         }   
     }
    return count
};

function numIslandsDFS(grid, i, j){
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0){
        return null
    }
    grid[i][j] = 0;
    numIslandsDFS(grid, i + 1, j)
    numIslandsDFS(grid, i - 1, j)
    numIslandsDFS(grid, i, j + 1)
    numIslandsDFS(grid, i, j - 1)
}


