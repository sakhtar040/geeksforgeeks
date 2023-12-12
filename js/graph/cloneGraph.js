class Node {
    constructor(val, neighbors) {
        this.val = val ? val : undefined;
        this.neighbors = neighbors ? neighbors : []
    }
}

class CloneGraph {
    constructor(node) {
        this.node = node
    }

    clone() {
        const map = new Map()

        const dfs = (node) => {
            if(map.has(node)) {
                return map.get(node)
            }

            const newNode = new Node(node.val)
            map.set(node, newNode)
            for(let neighbor of node.neighbors) {
                newNode.neighbors.push(dfs(neighbor))
            }
            return newNode
        }

        return this.node ? dfs(this.node) : null
    }
}

const node1 = new Node(1, [])
const node2 = new Node(2, [])
const node3 = new Node(3, [])
const node4 = new Node(4, [])

node1.neighbors.push(node2)
node1.neighbors.push(node4)

node2.neighbors.push(node1)
node2.neighbors.push(node3)

node3.neighbors.push(node2)
node3.neighbors.push(node4)

node4.neighbors.push(node1)
node4.neighbors.push(node3)

const cloneGraph = new CloneGraph(node1)
console.log(cloneGraph.clone())