// There is a new alien language which uses the latin alphabet.
// However, the order among letters are unknown to you.
// You receive a list of words from the dictionary, where words are sorted lexicographically
// by the rules of this new language. Derive the order of letters in this language.

// For example,
// Given the following words in dictionary,

// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// The correct order is: "wertf".

// Note:
// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.


class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (this.vertices.includes(v)) {
      console.log(`${v} already exists`);
    } else {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(u, v) {
    if (!this.vertices.includes(u)) {
      this.addVertex(u);
    }
    if (!this.vertices.includes(v)) {
      this.addVertex(v);
    }
    this.adjList.get(u).push(v);
    if (!this.isDirected) {
      this.adjList.get(v).push(u);
    }
  }


  topologicalSort() {
    // using dfs
    const { vertices } = this;
    const { adjList } = this;
    const visited = [];
    const topo = [];

    // recursion function
    const dfsRecur = (u) => {
      visited.push(u);
      topo.push(u);

      const neighbors = adjList.get(u);
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (!visited.includes(w)) {
          dfsRecur(w);
        }
      }
    };

    for (let i = 0; i < vertices.length; i++) {
      if (!visited.includes(vertices[i])) {
        dfsRecur(vertices[i]); // initial call
      }
    }
    return topo.reverse();
  }

  topoSort() {
    // https://www.youtube.com/watch?v=71eHuQvSwc0
    // counting zero indexes
    // zero index of a node is when there is no other node pointing towards it
    const mapOfIndexes = {}; // map for counting nodes indexes (excludes zero indexes)
    const zeroIndexes = []; // all the zeroIdexes is listed here
    const topologicalSort = [];
    for (const val of Object.values(this.adjList)) {
      val.forEach((el) => {
        mapOfIndexes[el] = mapOfIndexes[el] + 1 || 1;
      });
    }

    for (const char of Object.keys(this.adjList)) {
      if (!mapOfIndexes[char]) {
        zeroIndexes.push(char);
      }
    }

    while (zeroIndexes.length) {
      const curr = zeroIndexes.pop();
      topologicalSort.push(curr);
      if (!this.adjList[curr]) {
        continue;
      }
      const edges = this.edges[curr];
      edges.forEach((edge) => {
        mapOfIndexes[edge]--;
        if (mapOfIndexes[edge] == 0) {
          zeroIndexes.push(edge);
          delete mapOfIndexes[edge];
        }
      });
    }
    return topologicalSort;
  }
}

function alienDictionary(words) {
  const graph = new Graph(); // a new directed graph

  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i];
    const next = words[i + 1];
    const minLen = Math.min(curr.length, next.length);
    for (let j = 0; j < minLen; j++) {
      if (curr[j] == next[j]) {
        continue;
      } else {
        graph.addEdge(curr[j], next[j]);
        break;
      }
    }
  }

  return graph.topologicalSort();
}


const words = [
  'wrt',
  'wrf',
  'er',
  'ett',
  'rftt',
];

console.log(alienDictionary(words));
