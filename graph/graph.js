class TraverseGraph {
    constructor(graph) {
        this.graph = graph;
        this.resetVisited()
        this.dfList = []
        this.bfsList = []
        this.queue = []
    }

    resetVisited() {
        this.visited = {}
        for(let key of this.graph.keys()) {
            Object.assign(this.visited, {[key]: false})
        }
    }

    dfs(vertex) {
        this.visited[vertex] = true
        this.dfList.push(vertex)
        let vertices = this.graph.get(vertex)
        for(let node of vertices) {
            if(!this.visited[node]) {
                this.dfs(node)
            }
        }
    }

    bfs(vertex) {
        this.queue.push(vertex)
        this.visited[vertex] = true
        this.bfsList.push(vertex)

        while(this.queue.length) {
            let key = this.queue.shift()
            let vertices = this.graph.get(key)
            for(let node of vertices) {
                if(!this.visited[node]) {
                    this.visited[node] = true
                    this.bfsList.push(node)
                    this.queue.push(node)
                }
            }
        }
    }
}

class Create_Graph {
    constructor(vertices) {
        this.vertices = vertices
        this.list = new Map()

        //Add vertices
        for(let i=0; i<noVertices; i++) {
            this.addVertex(this.vertices[i])
        }
    }

    addVertex(vertex) {
        //creating adj list
        this.list.set(vertex, [])
    }

    addEdge(source, dest) {
        this.list.get(source).push(dest)
        this.list.get(dest).push(source)
    }
}

let noVertices = 6
let vertices = ["A", "B", "C", "D", "E", "F"]
const createGraph = new Create_Graph(vertices)

// adding edges
createGraph.addEdge("A", "B")
createGraph.addEdge("A", "C")
createGraph.addEdge("B", "D")
createGraph.addEdge("B", "E")
createGraph.addEdge("C", "E")
createGraph.addEdge("D", "E")
createGraph.addEdge("D", "F")
createGraph.addEdge("E", "F")

console.log(createGraph.list)

const traverseGraph = new TraverseGraph(createGraph.list)
console.log(traverseGraph.visited)

traverseGraph.dfs("A")
console.log(traverseGraph.dfList)

traverseGraph.resetVisited()

traverseGraph.bfs("A")
console.log(traverseGraph.bfsList)