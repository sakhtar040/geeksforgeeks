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

    InOrderTraversal() {
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

    toSumTree() {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            const traverseAndSum = (node) => {
                if(node === null) return 0

                let prevNodeData = node.data
                node.data = traverseAndSum(node.left) + traverseAndSum(node.right)

                return node.data + prevNodeData
            }
            traverseAndSum(rootNode)
            return this.root
        }
    }
}

const rootNode = new Node(26)
rootNode.left = new Node(10)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(6)
//rootNode.right.left = new Node(7)
rootNode.right.right = new Node(3)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.toSumTree())