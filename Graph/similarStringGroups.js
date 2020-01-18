// https://leetcode.com/problems/similar-string-groups/
const numSimilarGroups = (A) => {
  // create a map of words.
  // key is every word and value is array of similar words
  const map = {};
  A.forEach((el) => {
    map[el] = [];
  });
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (isSimilar(A[i], A[j])) { // check if word pair is similar
        map[A[i]].push(A[j]);
        map[A[j]].push(A[i]);
      }
    }
  }

  // dfs the map created.
  // mark all the node as visited
  let count = 0;
  const visited = [];
  for (const key of Object.keys(map)) {
    if (visited.includes(key)) continue;
    dfs(map, key, visited);

    // count++ after we visit all the nodes in a group
    count++;
  }
  return count;
};
function dfs(map, node, visited) {
  visited.push(node);
  const children = map[node];
  if (children.length === 0) return;
  for (let i = 0; i < children.length; i++) {
    if (!visited.includes(children[i])) {
      dfs(map, children[i], visited);
    }
  }
}
function isSimilar(a, b) {
  if (a === b) return true;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff++;
      if (diff > 2) return false; // if there is more than two letter difference, not similar
    }
  }
  return true;
}
