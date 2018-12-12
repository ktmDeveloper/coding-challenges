// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

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


class Graph{
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = []
        this.adjList = new Map()
    }
 
    addVertex(v){
        if(this.vertices.includes(v)){
            console.log(`${v} already exists`)
        } else {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }

    addEdge(u, v){
        if(!this.vertices.includes(u)){
            this.addVertex(u)
        }
        if(!this.vertices.includes(v)){
            this.addVertex(v)
        }
        this.adjList.get(u).push(v)
        if(!this.isDirected){
            this.adjList.get(v).push(u)
        }
    }


    topologicalSort(){
      
        const vertices = this.vertices;
        const adjList = this.adjList;
        const visited = []
        let topo = []

        //recursion function
        let dfsRecur = (u) => {

            visited.push(u)
            topo.push(u)
            
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
                dfsRecur(vertices[i]); //initial call
            }
        }
     return topo.reverse()
    }


}

function alienDictionary(words){
  
  let graph = new Graph() // a new directed graph
  
  for(let i = 0; i < words.length - 1; i++){
    let curr = words[i]
    let next = words[i+1]
    let minLen = Math.min(curr.length, next.length)
    for(let j = 0; j < minLen; j++){
      if(curr[j] == next[j]){
        continue
      } else {
        graph.addEdge(curr[j], next[j])
        break;
      }      
    }
  }
  
   return graph.topologicalSort()
}


let words = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

console.log(alienDictionary(words))