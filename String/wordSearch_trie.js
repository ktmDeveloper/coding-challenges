// https://leetcode.com/problems/word-search-ii/submissions/

function findWords(board, words) {
  if (!board || !words) {
    return [];
  }
  const results = [];
  const trie = createTrie(words);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // go over each letter on the board.
      search(trie, i, j, results, board);
    }
  }
  return results;
}

function createTrie(words) {
  // first create a trie of the words
  const trie = {};
  for (const word of words) {
    // keep the reference to the current node
    let node = trie;
    for (const letter of word) {
      // if the letter node is not present, create one
      if (!node[letter]) {
        node[letter] = {};
      }
      // after creating a new node with that letter
      // we just go inside that node and start over again
      node = node[letter];
    }
    // add this property to easy retrieval of the word later on
    node.word = word;
  }
  return trie;
}

function search(root, i, j, results, board) {
  if (root.word) {
    results.push(root.word);
    // make it null so that it wont be added again.
    // as we will have to traverse it again as it might be in middle node
    root.word = null;
  }
  // if out of bounds and the letter doesn't exist in the root, just return
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || !root[board[i][j]]) return;

  const letter = board[i][j];
  // change the character so that we dont come back at it again
  board[i][j] = '#';
  // traverse all possible directions
  search(root[letter], i + 1, j, results, board);
  search(root[letter], i - 1, j, results, board);
  search(root[letter], i, j + 1, results, board);
  search(root[letter], i, j - 1, results, board);
  // replace the character back.
  board[i][j] = letter;
}
