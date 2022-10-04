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

    printLL() {
        if(this.root === null) {
            return null
        } else {
            let list = "null -> "
            let currentNode = this.root
            while(currentNode) {
                list = list + currentNode.data + " -> "
                currentNode = currentNode.right
            }
            return list + "null"
        }
    }

    flatten(){
        if(this.root === null) {
            return null
        } else {
            let preOrderList = this.preOrderTraversal()
            let rootNode = this.root
            let i = 1
            while(i < preOrderList.length) {
                let tempNode = new Node(preOrderList[i])
                rootNode.left = null
                rootNode.right = tempNode
                rootNode = rootNode.right
                i++
            }
            return this.printLL()
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
console.log(binaryTree.flatten())