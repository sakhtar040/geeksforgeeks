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

    isBST(node) {
        if(node === null) {
            return null
        } else {
            let rootNode = node
            const check = (node, min, max) => {
                if(node === null) {
                    return true
                }

                if (node.data < min || node.data > max)
                    return false;

                return check(node.left, min, node.data - 1) && check(node.right, node.data + 1, max)
            }
            return check(rootNode, Number.MIN_VALUE, Number.MAX_VALUE)
        }
    }

    sizeOf(node) {
        if(node === null) {
            return 0
        } else {
            let lS = this.sizeOf(node.left)
            let rS = this.sizeOf(node.right)
            return Math.max(lS, rS) + 1
        }
    }

    largestBST() {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            const check = (node) => {
                if(this.isBST(node)) {
                    return this.sizeOf(node)
                }
                return Math.max(check(node.left), check(node.right))
            }
            return check(rootNode)
        }
    }
}

const node = new Node(1)
node.left = new Node(4)
node.right = new Node(4)
node.left.left = new Node(6)
node.left.right = new Node(8)
// node.right.left = new Node(11)
// node.right.right = new Node(13)
const bst = new BinarySearchTree(node)
console.log(bst.largestBST())