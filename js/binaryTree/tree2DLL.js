class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class DLLNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class BinaryTree{
    constructor(root) {
        this.root = root
        this.currentNode = null

        this.head = null
        this.prev = null
    }

    inOrder() {
        if(this.root === null) {
            return null
        } else {
            let res = []
            let rootNode = this.root
            const traverse = (rootNode) => {
                rootNode.left && traverse(rootNode.left)
                res.push(rootNode.data)
                rootNode.right && traverse(rootNode.right)
            }
            traverse(rootNode)
            return res
        }
    }

    printDLL(data) {
        if(data === null) {
            return "empty"
        } else {
            let currentNode = data
            let list = "null -> "
            while(currentNode) {
                list = list + currentNode.data + " -> "
                currentNode = currentNode.next
            }
            return list + " null"
        }
    }

    tree2DLL() {
        let treeList = this.inOrder()
        let prevNode = null
        let nextNode = null
        for(let i=0; i<treeList.length; i++) {
            let tempNode = new DLLNode(treeList[i])
            tempNode.prev = prevNode
            tempNode.next = prevNode
            nextNode = prevNode
            prevNode = tempNode
            this.currentNode = prevNode
        }
        return this.printDLL(this.currentNode)
    }

    anotherSol() {
        let rootNode = this.root
        const traverse = (rootNode) => {
            if(rootNode === null) {
                return
            }

            traverse(rootNode.left)

            if(this.prev === null) {
                this.head = rootNode
            } else {
                rootNode.left = this.prev
                this.prev.right = rootNode
            }

            this.prev = rootNode

            traverse(rootNode.right)
        }

        traverse(rootNode)
        return this.printDLL(this.root)
    }
}
const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)
rootNode.right.right = new Node(7)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.tree2DLL())
console.log(binaryTree.anotherSol())