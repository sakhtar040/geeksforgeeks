class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor() {
        this.root = null
    }

    addToTree(data) {
        let rootNode = this.root
        if(this.root == null) {
            this.root = new Node(data)
        } else {
            const add = (rootNode) => {
                if(rootNode.left === null) {
                    rootNode.left = new Node(data)
                    return
                } else if(rootNode.right === null) {
                    rootNode.right = new Node(data)
                    return
                } else if(rootNode.left) {
                    return add(rootNode.left)
                } else if(rootNode.right) {
                    return add(rootNode.right)
                }
            }
            return add(rootNode)
        }
    }

    postOrderTraversal() {
        const list = []
        let rootNode = this.root
        const traverse = (rootNode) => {
            rootNode.left && traverse(rootNode.left)
            rootNode.right && traverse(rootNode.right)
            list.push(rootNode.data)
        }
        traverse(rootNode)
        return list
    }

    printBinaryTree(){
        if(this.root === null) {
            return null
        } else {
            console.log("postOrder: ", this.postOrderTraversal())
        }
    }
}

const binaryTree = new BinaryTree()
binaryTree.addToTree(1)
binaryTree.addToTree(2)
binaryTree.addToTree(3)
binaryTree.addToTree(4)
binaryTree.addToTree(5)
binaryTree.addToTree(6)
binaryTree.addToTree(7)
binaryTree.printBinaryTree()