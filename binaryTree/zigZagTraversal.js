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

    zigZagTraversal() {
        if(this.root === null) {
            return null
        } else {
            let stack1 = [this.root]
            let stack2 = []
            let list = []
            let fromLeft = true

            while(stack1.length) {
                let tempNode = stack1.pop()
                list.push(tempNode.data)

                if(fromLeft) {
                    tempNode.left && stack2.push(tempNode.left)
                    tempNode.right && stack2.push(tempNode.right)
                } else {
                    tempNode.right && stack2.push(tempNode.right)
                    tempNode.left && stack2.push(tempNode.left)
                }

                if(stack1.length === 0) {
                    let tempStack = stack1
                    stack1 = stack2
                    stack2 = tempStack
                    fromLeft = !fromLeft
                }
            }
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
rootNode.right.right = new Node(7)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.zigZagTraversal())