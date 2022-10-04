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
        this.diameter = Number.MIN_VALUE
    }

    calcLCA(root, n1, n2) {
        if(root === null) return root
        if(root.data === n1 || root.data === n2) return root

        let leftLCA = this.calcLCA(root.left, n1, n2)
        let rightLCA = this.calcLCA(root.right, n1, n2)

        if(leftLCA !== null && rightLCA !== null) return root
        if(leftLCA === null && rightLCA === null) return null

        return leftLCA !== null ? leftLCA : rightLCA
    }

    findLevel(lca, node, level) {
        if(lca === null) return -1
        if(lca.data === node) return level

        let leftLevel = this.findLevel(lca.left, node, level + 1)

        if(leftLevel === -1) return this.findLevel(lca.right, node, level + 1)

        return leftLevel
    }

    findDistance(node1, node2) {
        if(this.root === null) {
            return null
        } else {
            let lca = this.calcLCA(this.root, node1, node2)
            let d1 = this.findLevel(lca, node1, 0)
            let d2 = this.findLevel(lca, node2, 0)

            return d1 + d2
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
console.log(binaryTree.findDistance(6, 7))