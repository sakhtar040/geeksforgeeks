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

    getLeftView() {
        if(this.root === null) {
            return null
        } else {
            let list = []
            let rootNode = this.root
            const traverse = (rootNode, list, level) => {
                if(rootNode === null) {
                    return
                }

                if(level === list.length) {
                    list.push(rootNode.data)
                }
                traverse(rootNode.left, list, level+1)
                traverse(rootNode.right, list, level + 1)
            }

            traverse(rootNode, list, 0)
            return list
        }
    }

    getRightView() {
        if(this.root === null) {
            return null
        } else {
            let list = []
            let rootNode = this.root
            const traverse = (rootNode, list, level) => {
                if(rootNode === null) {
                    return
                }

                if(level === list.length) {
                    list.push(rootNode.data)
                }
                traverse(rootNode.right, list, level + 1)
                traverse(rootNode.left, list, level+1)
            }

            traverse(rootNode, list, 0)
            return list
        }
    }
}
const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)
rootNode.right.left = new Node(6)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.getLeftView())
console.log(binaryTree.getRightView())