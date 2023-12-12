class DetectCycle {
    constructor() {
        this.directedGraph = new Map()
        this.unDirectedGraph = new Map()
        this.setDirectedGraph()
        this.setUndirectedGraph()
        this.resetDirectedGraphVisited()
        this.resetUnDirectedGraphVisited()
    }

    setDirectedGraph() {
        this.directedGraph.set("A", ["B"])
        this.directedGraph.set("B", ["C"])
        this.directedGraph.set("C", ["D"])
        this.directedGraph.set("D", ["A"])
    }

    setUndirectedGraph() {
        this.unDirectedGraph.set("A", ["B", "D"])
        this.unDirectedGraph.set("B", ["C"])
        this.unDirectedGraph.set("C", ["B"])
        this.unDirectedGraph.set("D", ["A"])
    }

    resetDirectedGraphVisited() {
        this.directedGraphVisited = {}
        for(let key of this.directedGraph.keys()) {
            Object.assign(this.directedGraphVisited, {[key]: false})
        }
    }

    detectCycleInDirectedGraphUtil(node) {
        if(this.directedGraphVisited[node]) {
            return true
        }
        this.directedGraphVisited[node] = true
        if(this.directedGraph.get(node)) {
            for(let edge of this.directedGraph.get(node)) {
                if(this.detectCycleInDirectedGraphUtil(edge)) {
                    return true
                }
            }
        }
        this.directedGraphVisited[node] = false
        return false
    }

    detectCycleInDirectedGraph() {
        for(let vertex of this.directedGraph.keys()) {
            this.directedGraphVisited[vertex] = true
            if(this.directedGraph.get(vertex)) {
                for(let edge of this.directedGraph.get(vertex)) {
                    if(this.detectCycleInDirectedGraphUtil(edge)) {
                        return true
                    }
                }
            }
            this.directedGraphVisited[vertex] = false
        }
        return false
    }

    resetUnDirectedGraphVisited() {
        this.unDirectedGraphVisited = {}
        for(let key of this.unDirectedGraph.keys()) {
            Object.assign(this.unDirectedGraphVisited, {[key]: 0})
        }
    }

    detectCycleInUnDirectedGraphUtil(node) {
        if(this.unDirectedGraphVisited[node] === 2) {
            return true
        }
        this.unDirectedGraphVisited[node] = 1
        if(this.unDirectedGraph.get(node)) {
            for(let edge of this.unDirectedGraph.get(node)) {
                if(this.unDirectedGraphVisited[edge] === 1) {
                    this.unDirectedGraphVisited[edge] = 2
                } else {
                    if(this.detectCycleInUnDirectedGraphUtil(edge)) {
                        return true
                    }
                }
            }
        }
        return false
    }

    //Graph Color Algorithm
    detectCycleInUnDirectedGraph(node) {
        for(let vertex of this.unDirectedGraph.keys()) {
            this.unDirectedGraphVisited[vertex] = 1
            if(this.unDirectedGraph.get(vertex)) {
                for(let edge of this.unDirectedGraph.get(vertex)) {
                    if(this.detectCycleInUnDirectedGraphUtil(edge)) {
                        return true
                    }
                }
            }
            this.unDirectedGraphVisited[vertex] = 0
        }
        return false
    }
}

const detectCycle = new DetectCycle()
console.log(detectCycle.directedGraph)
console.log(detectCycle.directedGraphVisited)
console.log(detectCycle.detectCycleInDirectedGraph())

console.log(detectCycle.unDirectedGraph)
console.log(detectCycle.unDirectedGraphVisited)
console.log(detectCycle.detectCycleInUnDirectedGraph())