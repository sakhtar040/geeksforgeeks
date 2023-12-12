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

    bst() {
        let inOrder = []
        const inOrderTraversal = (node) => {
            node.left && inOrderTraversal(node.left)
            inOrder.push(node.data)
            node.right && inOrderTraversal(node.right)
        }
        let rootNode = this.root
        inOrderTraversal(rootNode)
        inOrder.sort((a, b) => a - b)

        let index = 0
        const toBST = (node, arr) => {
            if(node === null) {
                return null
            }
            node.left && toBST(node.left, arr)
            node.data = arr[index++]
            node.right && toBST(node.right, arr)
        }
        toBST(rootNode, inOrder)
        return this.root
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)
rootNode.right.right = new Node(7)

const bst = new BinarySearchTree(rootNode)
console.log(bst.bst())