const topologicalSorting = (graph) => {
    let stack = []
    let visited = {}

    const dfs = (v) => {
        if(visited[v]) {
            return
        }
        visited[v] = true
        stack.push(v)
        if(graph.get(v) !== []) {
            for(let u of graph.get(v)) {
                dfs(u)
            }
        }
    }

    for(let i=0; i<graph.size; i++) {
        dfs(i)
    }
    return stack.reverse()
}

const graph = new Map()
graph.set(0, [])
graph.set(1, [])
graph.set(2, [3])
graph.set(3, [1])
graph.set(4, [0, 1])
graph.set(5, [2, 0])

console.log(topologicalSorting(graph))