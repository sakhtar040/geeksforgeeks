class AdjMatrix_AdjList {
    constructor(matrix) {
        this.matrix = matrix
        this.adjList = new Map()
    }

    toAdjList() {
        for(let pair of this.matrix) {
            let [v, e] = pair
            if(!this.adjList.get(v)) {
                this.adjList.set(v, [])
            }
            if(!this.adjList.get(e)) {
                this.adjList.set(e, [])
            }
            this.adjList.get(v).push(e)
            this.adjList.get(e).push(v)
        }
        return this.adjList
    }
}

const adjMatrix = [['A', 'B'], ['A', 'D'], ['B', 'C'], ['D', 'E'], ['E', 'F']]
const adjMatrix_AdjList = new AdjMatrix_AdjList(adjMatrix)
console.log(adjMatrix_AdjList.toAdjList())