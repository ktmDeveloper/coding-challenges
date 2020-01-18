// class Graph{
//     constructor(isDirected = false){
//         this.isDirected = isDirected
//         this.vertices = []
//         this.adjList = new Map()
//     }

//     addVertex(v){
//         if(this.vertices.includes(v)){
//             console.log('vertice already added')
//             return null
//         } else {
//             this.vertices.push(v)
//             this.adjList.set(v, [])
//         }
//     }

//     addEdge(v,w){
//         if(!this.vertices.includes(v)){
//             this.addVertex(v)
//         }
//         if(!this.vertices.includes(w)){
//             this.addVertex(w)
//         }
//         this.adjList.get(v).push(w)

//         if(!this.isDirected){
//             this.adjList.get(w).push(v)
//         }
//     }

//     getVertices() {
//         return this.vertices;
//     }

//     getAdjList() {
//         return this.adjList;
//     }

//     bfs(startVertex){
//         let adjList = this.getAdjList()
//         let queue = []
//         let visited = []

//         queue.push(startVertex)

//         while(queue.length){
//             let firstItem = queue.shift()
//             if(!visited.includes(firstItem)){
//                 console.log(firstItem)
//                 let connectedNodes = adjList.get(firstItem)
//                 for (var nodes of connectedNodes) {
//                     queue.push(nodes)
//                 }
//             }

//             visited.push(firstItem)
//         }
//     }

//     dfs(startVertex){
//         let vertics = this.getVertices()
//         let adjList = this.getAdjList()
//         let stack = []
//         let visited = []

//         stack.push(startVertex)
//         while(stack.length){
//             let firstItem = stack.pop()
//             if(!visited.includes(firstItem)){
//                 console.log(firstItem)
//                 let connectedNodes = adjList.get(firstItem)
//                 for (var node of connectedNodes) {
//                     stack.push(node)
//                 }
//             }
//             visited.push(firstItem)
//         }
//     }

// }

// const graph = new Graph();
// const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// for (let i = 0; i < myVertices.length; i++) {
//     graph.addVertex(myVertices[i]);
// }
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("C", "D");
// graph.addEdge("C", "G");
// graph.addEdge("D", "G");
// graph.addEdge("D", "H");
// graph.addEdge("B", "E");
// graph.addEdge("B", "F");
// graph.addEdge("E", "I");

// graph.dfs()

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

  toString() {
    const { vertices } = this;
    let string = '\n';
    for (const vertex of vertices) {
      string += `${vertex} -> `;
      const children = this.adjList.get(vertex);
      for (const child of children) {
        string += 'child';
      }
      string += '\n';
    }
    return string;
  }

  bfs(startVertex) {
    const { adjList } = this;
    const queue = [];
    const visited = [];

    queue.push(startVertex);

    while (queue.length) {
      const firstItem = queue.shift();
      if (!visited.includes(firstItem)) {
        console.log(firstItem);
        const connectedNodes = adjList.get(firstItem);
        for (const nodes of connectedNodes) {
          queue.push(nodes);
        }
      }

      visited.push(firstItem);
    }
  }

  dfs(startVertex) {
    const { adjList } = this;
    const stack = [];
    const visited = [];

    stack.push(startVertex);

    while (stack.length) {
      const firstItem = stack.pop();
      if (!visited.includes(firstItem)) {
        console.log(firstItem);
        const connectedNodes = adjList.get(firstItem);
        for (const nodes of connectedNodes) {
          stack.push(nodes);
        }
      }

      visited.push(firstItem);
    }
  }


  depthFirstSearchRecur() {
    const { vertices } = this;
    const { adjList } = this;
    const visited = [];

    // recursion function
    const dfsRecur = (u) => {
      console.log(u);

      visited.push(u);
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
  }

  topologicalSort() {
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

    while (topo.length) {
      console.log(topo.pop());
    }
  }
}
