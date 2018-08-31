//https://leetcode.com/problems/word-search/description/


function isWord(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word)) {
                return true;
            }
        }
    }
    return false
}

function dfs(board, row, col, word) {
    if (word.length == 0) {
        return true;
    }
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] != word[0]) {
        return false;
    }
    //reset the board
    let temp = board[row][col];
    board[row][col] = "#";
    let result = dfs(board, row + 1, col, word.substr(1)) || dfs(board, row - 1, col, word.substr(1)) || dfs(board, row, col + 1, word.substr(1)) || dfs(board, row, col - 1, word.substr(1))
    board[row][col] = temp;
    return result;
}


let board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
]

let words = ["oath", "pea", "eat", "rain"]

let results = []
words.forEach(function (el) {
    if (isWord(board, el)) {
        results.push(el)
    }
})

if (results.length == 0) {
    console.log('no word found')
} else {
    console.log(results)
}
