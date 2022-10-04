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

    isTree() {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            let queue = [rootNode]
            let obj = {}

            while(queue.length) {
                let tempNode = queue.shift()
                if(!obj.hasOwnProperty(tempNode.data)) {
                    obj[tempNode.data] = 1
                } else {
                    return false
                }
                tempNode.left && queue.push(tempNode.left)
                tempNode.right && queue.push(tempNode.right)
            }
            return true
        }
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
//rootNode.left.right.left = rootNode.right

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.isTree())