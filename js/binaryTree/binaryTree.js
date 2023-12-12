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

    inOrderTraversal() {
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

    printBinaryTree(){
        if(this.root === null) {
            return null
        } else {
            console.log("inOrder: ", this.inOrderTraversal())
        }
    }

    deleteNode(data) {
        const rootNode = this.root;
        if(rootNode === null) {
            return null
        } else {
            if(rootNode.left === null && rootNode.right === null) {
                return null
            }

            let queue = [rootNode]
            let tempNode = null
            let delNode = null

            while(queue.length) {
                tempNode = queue[0]
                queue.shift()

                if(tempNode.data === data) {
                    delNode = tempNode
                    break
                }

                tempNode.left && queue.push(tempNode.left)
                tempNode.right && queue.push(tempNode.right)
            }

            const replaceWithRightNode = (data, rootNode) => {
                let tempNode = rootNode
                let prevNode = null

                while(tempNode.right) {
                    if(tempNode.right) {
                        prevNode = tempNode
                    }
                    tempNode = tempNode.right
                }

                prevNode.right = null
                return tempNode
            }
            if(delNode && (delNode.left || delNode.right)) {
                tempNode.data = replaceWithRightNode(tempNode.data, rootNode).data
            } else {
                tempNode = null
            }
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
binaryTree.deleteNode(7)