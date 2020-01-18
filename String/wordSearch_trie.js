// https://leetcode.com/problems/word-search-ii/submissions/

function findWords(board, words) {
  const results = [];
  const trie = {};
  // first create a trie of the words
  for (const word of words) {
    let node = trie;
    for (const letter of word) {
      if (!node[letter]) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node.word = word; // add a property 'word' at the end of tree for easy extraction later on
  }

  const search = function (root, i, j) {
    if (root.word) {
      results.push(root.word);
      // make it null so that it wont be added again.
      // we will have to traverse it again as it might be in middle node
      root.word = null;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || !root[board[i][j]]) return;

    const letter = board[i][j];
    // change the character so that we dont come back at it again
    board[i][j] = '#';
    search(root[letter], i + 1, j);
    search(root[letter], i - 1, j);
    search(root[letter], i, j + 1);
    search(root[letter], i, j - 1);
    // replace the character back.
    board[i][j] = letter;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(trie, i, j);
    }
  }

  return results;
}
