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

const node = new Node(10)
node.left = new Node(8)
node.right = new Node(12)
node.left.left = new Node(7)
node.left.right = new Node(9)
node.right.left = new Node(11)
node.right.right = new Node(13)
const bst = new BinarySearchTree(node)
console.log(bst.lca(7, 11))