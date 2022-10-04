class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root
    }

    inOrder() {
        if(this.root === null) {
            return null
        } else {
            const list = []
            let rootNode = this.root
            const traverse = (rootNode) => {
                rootNode.left && traverse(rootNode.left)
                list.push(rootNode.data)
                rootNode.right && traverse(rootNode.right)
            }
            traverse(rootNode)
            return list
        }
    }

    inOrderSuccessor(key) {
        let inOrder = this.inOrder()
        let index = inOrder.indexOf(key)
        return inOrder[index + 1] ? inOrder[index + 1] : null
    }

    inOrderPredecessor(key) {
        let inOrder = this.inOrder()
        let index = inOrder.indexOf(key)
        return inOrder[index - 1] ? inOrder[index - 1] : null
    }
}

const node = new Node(10)
node.left = new Node(8)
node.right = new Node(12)
node.left.left = new Node(7)
node.left.right = new Node(9)
node.right.left = new Node(11)
node.right.right = new Node(13)
const bst = new BinarySearchTree(node)
bst.inOrder()
console.log(bst.inOrderSuccessor(11))
console.log(bst.inOrderPredecessor(13))