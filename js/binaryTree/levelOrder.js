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

    levelOrder() {
        let rootNode = this.root
        let queue = [rootNode]
        let tempNode = null
        let list = []

        while(queue.length) {
            tempNode = queue.shift()
            list.push(tempNode.data)
            tempNode.left && queue.push(tempNode.left)
            tempNode.right && queue.push(tempNode.right)
        }
        return list
    }

    reverseLevelOrder() {
        let rootNode = this.root
        let stack = []
        let queue = [rootNode]
        let tempNode = null
        let list = []

        while(queue.length) {
            tempNode = queue.shift()
            stack.push(tempNode)
            tempNode.right && queue.push(tempNode.right)
            tempNode.left && queue.push(tempNode.left)
        }
        while(stack.length) {
            tempNode = stack.pop()
            list.push(tempNode.data)
        }
        return list
    }

    printBinaryTree(){
        if(this.root === null) {
            return null
        } else {
            console.log("levelOrder: ", this.levelOrder())
            console.log("reverseLevelOrder: ", this.reverseLevelOrder())
        }
    }
}

const binaryTree = new BinaryTree()
binaryTree.addToTree(1)
binaryTree.addToTree(2)
binaryTree.addToTree(3)
binaryTree.addToTree(4)
binaryTree.addToTree(5)
binaryTree.printBinaryTree()