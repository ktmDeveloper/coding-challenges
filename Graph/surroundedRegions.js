/**
 * https://leetcode.com/problems/surrounded-regions
 */
var solve = function(board) {
    if(board == null || board.length == 0){
        return null
    }
    let row = board.length
    let col = board[0].length

    //first change all the 'O' in border and its neighbors to '#' with recursion
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ((j == 0 || i == row - 1 || j == col - 1 || i == 0) && board[i][j] == 'O') {
                recur(board, i, j)
            }
        }
    }
    
    //Now change the inner remaining 'O' to 'X', and change '#' back to 'O'
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(board[i][j] == 'O'){
                board[i][j] = 'X'
            }
            if(board[i][j] == '#'){
                board[i][j] = 'O'
            }
        }
    }

    return board
    
    function recur(board, i, j) {
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == 'X' || board[i][j] == '#'){
            return null
        }

        if (board[i][j] == 'O') {
            board[i][j] = '#'
        }
        recur(board, i + 1, j)
        recur(board, i - 1, j)
        recur(board, i, j + 1)
        recur(board, i, j - 1)
    }
};
