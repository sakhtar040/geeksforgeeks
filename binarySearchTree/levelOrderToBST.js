class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class NodeDetails {
    constructor(node, min, max) {
        this.node = node
        this.min = min
        this.max = max
    }
}

class BinarySearchTree {
    constructor() {
        this.index = 0
    }

    constructTreeUsingRecursion(levelOrder) {
        let length = levelOrder.length
        let root = null

        const toBST = (node, item) => {
            if(node === null) {
                node = new Node(item)
                return node
            } else {
                if(item >= node.data) {
                    node.right = toBST(node.right, item)
                } else {
                    node.left = toBST(node.left, item)
                }
                return node
            }
        }

        for(let i=0; i<length; i++) {
            root = toBST(root, levelOrder[i])
        }
        return root
    }

    constructTreeUsingIteration(levelOrder) {
        let length = levelOrder.length
        let queue = []
        let rootNode = new Node(levelOrder[0])
        let rootNodeDetails = new NodeDetails(rootNode, Number.MIN_VALUE, Number.MAX_VALUE)
        queue.push(rootNodeDetails)
        let i = 1

        while(queue.length) {
            let tempNodeDetails = queue.shift()
            let tempNode = tempNodeDetails.node
            let min = tempNodeDetails.min
            let max = tempNodeDetails.max

            if(i < length && min < levelOrder[i] && levelOrder[i] < tempNode.data) {
                tempNode.left = new Node(levelOrder[i++])
                queue.push(new NodeDetails(tempNode.left, min, tempNode.data))
            }

            if(i < length && max > levelOrder[i] && levelOrder[i] > tempNode.data) {
                tempNode.right = new Node(levelOrder[i++])
                queue.push(new NodeDetails(tempNode.right, tempNode.data, max))
            }
        }
        return rootNode
    }
}

const bst = new BinarySearchTree()
console.log(bst.constructTreeUsingRecursion([7, 4, 12, 3, 6, 8, 1, 5, 10]))
console.log(bst.constructTreeUsingIteration([7, 4, 12, 3, 6, 8, 1, 5, 10]))