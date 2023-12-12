class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(root) {
        this.root = root
    }

    diagonalTraversal() {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            let rightStack = []
            let leftStack = []
            let queue = [rootNode]
            let list = []

            while(queue.length) {
                let tempNode = queue.shift()
                if(!tempNode) {
                    break
                }
                tempNode && list.push(tempNode.data)
                tempNode.right && rightStack.push(tempNode.right)
                tempNode.left && leftStack.push(tempNode.left)

                rightStack.length ? queue.push(rightStack.pop()) : queue.push(leftStack.shift())
            }
            return list
        }
    }
}
const rootNode = new Node(8)
rootNode.left = new Node(3)
rootNode.right = new Node(10)
rootNode.left.left = new Node(1)
rootNode.right.left = new Node(6)
rootNode.right.left.left = new Node(4)
rootNode.right.left.right = new Node(7)
rootNode.right.right = new Node(14)
rootNode.right.right.left = new Node(13)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.diagonalTraversal())