// https://leetcode.com/problems/word-ladder/submissions/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const graph = {};
  wordList.push(beginWord);

  // create a graph of those list to do a bfs
  wordList.forEach((el) => {
    graph[el] = [];
  });
  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      const from = wordList[i];
      const to = wordList[j];
      if (isSimilar(from, to)) { // isSimilar checks if words have more than one difference in words
        graph[from].push(to);
        graph[to].push(from);
      }
    }
  }

  const distances = {}; // keep all the distances to the word in this map
  const queue = [];
  distances[beginWord] = 1; // begin distance is set to one
  queue.push(beginWord);
  while (queue.length) {
    const curr = queue.shift();
    if (endWord == curr) {
      return distances[curr]; // if we see the end word we just return the distance
    }
    const children = graph[curr];
    for (const child of children) {
      if (!distances[child]) {
        distances[child] = distances[curr] + 1; // distance to the next node is just the unit distance plus the parent distance
        queue.push(child);
      }
    }
  }
  return 0;
};

let isSimilar = function (A, B) {
  let diff = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }
  return true;
};
