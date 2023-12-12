class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = root
    }

    checkDeadEnd() {
        if(this.root === null) {
            return false
        } else {
            const check = (node, min, max) => {
                if(node === null) {
                    return false
                }

                if(min === max) {
                    return true
                }

                return check(node.left, min, node.data - 1) || check(node.right, node.data + 1, max)
            }
            let rootNode = this.root
            return check(rootNode, 1, Number.MAX_VALUE)
        }
    }
}

const node = new Node(8)
node.left = new Node(7)
node.right = new Node(11)
node.left.left = new Node(1)
node.left.right = null
node.right.left = new Node(10)
node.right.left.left = new Node(9)
node.right.right = new Node(13)
const bst = new BinarySearchTree(node)
console.log(bst.checkDeadEnd())