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

    lca(node1, node2) {
        if(this.root === null) {
            return null
        } else {
            let v1 = false
            let v2 = false

            const calcLCA = (node, n1, n2) => {
                if(node === null) return null

                let tempNode = null

                if(node.data === n1) {
                    v1 = true
                    tempNode = node
                }

                if(node.data === n2) {
                    v2 = true
                    tempNode = node
                }

                let leftLCA = calcLCA(node.left, n1, n2)
                let rightLCA = calcLCA(node.right, n1, n2)

                if(tempNode !== null) {
                    return tempNode
                }

                if(leftLCA !== null && rightLCA !== null) {
                    return node
                }

                return leftLCA !== null ? leftLCA : rightLCA
            }

            let rootNode = this.root
            let lca = calcLCA(rootNode, node1, node2)

            if(v1 && v2) {
                return lca
            }

            return null
        }
    }
}
const rootNode = new Node(3)
rootNode.left = new Node(5)
rootNode.right = new Node(1)
rootNode.left.left = new Node(6)
rootNode.left.right = new Node(2)
rootNode.right.left = new Node(0)
rootNode.right.right = new Node(8)
rootNode.left.right.left = new Node(7)
rootNode.left.right.right = new Node(4)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.lca(5, 1))