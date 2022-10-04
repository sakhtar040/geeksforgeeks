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

    getHeight(){
        if(this.root === null) {
            return -1
        } else if(this.root && this.root.left === null && this.root.right === null) {
            return 0
        } else {
            let leftHeight = 0
            let rightHeight = 0
            let currentNode = this.root
            while(currentNode.left) {
                leftHeight++
                currentNode = currentNode.left
            }
            let current = this.root
            while(current.right) {
                rightHeight++
                current = current.right
            }
            return Math.max(leftHeight, rightHeight)
        }
    }

    getHeightUsingRecursion() {
        if(this.root == null) {
            return -1
        } else {
            const getHeight = (rootNode) => {
                if(rootNode === null) {
                    return -1
                } else {
                    let lHeight = getHeight(rootNode.left)
                    let rHeight = getHeight(rootNode.right)

                    return lHeight > rHeight ? lHeight + 1 : rHeight + 1
                }
            }

            return getHeight(this.root)
        }
    }
}
const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)
rootNode.right.right = new Node(7)
rootNode.left.left.left = new Node(8)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.getHeight())
console.log(binaryTree.getHeightUsingRecursion())