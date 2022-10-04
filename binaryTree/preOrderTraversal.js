class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(data) {
        this.root = data
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

    preOrderTraversal() {
        const list = []
        let rootNode = this.root
        const traverse = (rootNode) => {
            list.push(rootNode.data)
            rootNode.left && traverse(rootNode.left)
            rootNode.right && traverse(rootNode.right)
        }
        traverse(rootNode)
        return list
    }

    printBinaryTree(){
        if(this.root === null) {
            return null
        } else {
            console.log("preOrder: ", this.preOrderTraversal())
        }
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(5)
rootNode.left.left = new Node(3)
rootNode.left.right = new Node(4)
rootNode.right.right = new Node(6)

const binaryTree = new BinaryTree(rootNode)
binaryTree.printBinaryTree()