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

    isBST() {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
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
}

const node = new Node(10)
node.left = new Node(8)
node.right = new Node(12)
node.left.left = new Node(7)
node.left.right = new Node(9)
node.right.left = new Node(11)
node.right.right = new Node(13)
const bst = new BinarySearchTree(node)
console.log(bst.isBST())