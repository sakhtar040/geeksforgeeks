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

    mergeBT() {
        var mergeTrees = function(root1, root2) {
            if(root1 === null && root2 === null) {
                return null
            } else if(root1 === null || root2 === null) {
                return !root1 ? root2 : root1
            } else {
                const getSum = (node1, node2) => {
                    if(node1 === null && node2 === null) {
                        return null
                    } else if(node1 === null || node2 === null) {
                        return node1 ? node1.val : node2.val
                    } else {
                        return node1.val + node2.val
                    }
                }
                const merge = (node1, node2) => {
                    let node = new TreeNode()
                    node.val = getSum(node1, node2)
                    if(node1 === null && node2 === null) {
                        return null
                    } else if(node1 === null || node2 === null) {
                        return node1 ? node1 : node2
                    }
                    node.left = merge(node1.left, node2.left)
                    node.right = merge(node1.right, node2.right)
                    return node
                }
                return merge(root1, root2)
            }
        };
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