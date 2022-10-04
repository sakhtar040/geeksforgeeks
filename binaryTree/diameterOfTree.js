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
        this.diameter = Number.MIN_VALUE
    }

    getHeight(rootNode) {
        if(rootNode === null) {
            return 0
        } else {
            let lHeight = this.getHeight(rootNode.left)
            let rHeight = this.getHeight(rootNode.right)
            this.diameter = Math.max(this.diameter, 1 + lHeight + rHeight)
            return Math.max(lHeight, rHeight) + 1
        }
    }

    getDiameter() {
        this.getHeight(this.root)
        return this.diameter
    }
}
const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.getDiameter())