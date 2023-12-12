const mColoring = (graph, m, n) => {
    let visited = {}

    const canColor = (node, i) => {
        for(let key of graph.keys()) {
            if(key !== node && graph.get(key).includes(node) && visited[key] === i) {
                return false
            }
        }
        return true
    }

    const solve = (node) => {
        if(node === n) {
            return true
        }
        for(let i=1; i<=m; i++) {
            if(canColor(node, i)) {
                visited[node] = i
                if(solve(node + 1)) {
                    return true
                }
                visited[node] = 0
            }
        }
        return false
    }

    solve(0)
    return visited
}

const createAdjList = (matrix) => {
    const adjList = new Map()
    for(let node of matrix) {
        let [v, e] = node

        if(!adjList.has(v)) {
            adjList.set(v, [])
        }
        if(!adjList.has(e)) {
            adjList.set(e, [])
        }

        adjList.get(v).push(e)
        adjList.get(e).push(v)
    }
    return adjList
}

const adjMatrix = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]]

const adjList = createAdjList(adjMatrix)
console.log(adjList)

console.log(mColoring(adjList, 3, 4))