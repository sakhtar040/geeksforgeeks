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

    balancedBST() {
        let inOrder = []
        const getInOrder = (node) => {
            node.left && getInOrder(node.left)
            inOrder.push(node)
            node.right && getInOrder(node.right)
        }
        getInOrder(this.root)

        const balance = (nodes, start, end) => {
            if(start > end) {
                return null
            }

            let mid = parseInt((start + end) / 2, 10)
            let root = nodes[mid]
            root.left = balance(nodes, start, mid-1)
            root.right = balance(nodes, mid + 1, end)
            return root
        }
        inOrder.sort((a, b) => a.data - b.data)
        return balance(inOrder, 0, inOrder.length-1)
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.left.left = new Node(3)
rootNode.left.left.left = new Node(4)
rootNode.left.left.left.left = new Node(5)

const bst = new BinarySearchTree(rootNode)
console.log(bst.balancedBST())