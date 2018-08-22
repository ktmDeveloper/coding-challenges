class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Map();
        this.Colors = {
            WHITE: 0,
            GREY: 1,
            BLACK: 2
        };
    }

    addVertex(v) {
        if (this.vertices.includes(v)) {
            return `${v} is already added!`;
        } else {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v);
        }

        if (!this.adjList.get(w)) {
            this.addVertex(w);
        }

        this.adjList.get(v).push(w);

        if (!this.isDirected) {
            //if graph directed then no need to add again
            this.adjList.get(w).push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = "";
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += ` ${neighbors[j]} `;
            }
            s += "\n";
        }
        return s;
    }

    initializeColor(vertices) {
        //to keep track of visited vertices
        const Colors = this.Colors;

        const color = {};
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = Colors.WHITE;
        }
        return color;
    }

    breadthFirstSearch(startVertex, callback) {
        //BFS in graph. We can modify this BFS according to our need.
        const vertices = this.getVertices();
        const adjList = this.getAdjList();
        const color = this.initializeColor(vertices);
        const queue = [];
        const Colors = this.Colors;

        queue.push(startVertex);

        while (queue.length > 0) {
            const firstItem = queue.shift();
            const neighbors = adjList.get(firstItem);
            color[firstItem] = Colors.GREY;

            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === Colors.WHITE) {
                    color[w] = Colors.GREY;
                    queue.push(w);
                }
            }

            color[firstItem] = Colors.BLACK;
            if (callback) {
                callback(firstItem);
            }
        }
    }
    
}

const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
let cb = v => console.log(`Value of vertex is: ${v}`);

console.log(graph.breadthFirstSearch("A", cb));