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

    isBalanced() {
        if(this.root === null) {
            return false
        } else {
            let rootNode = this.root

            const height = (node) => {
                if (node === null) return 0
                return Math.max(height(node.left), height(node.right)) + 1
            }

            const isBal = (node) => {
                if(node === null) return true
                let leftHeight = height(node.left)
                let rightHeight = height(node.right)

                return Math.abs(leftHeight - rightHeight) > 1 && isBal(node.left) && isBal(node.right)
            }
            return isBal(rootNode)
        }
    }
}
const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)
rootNode.right.right = null
rootNode.left.left.left = new Node(7)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.isBalanced())