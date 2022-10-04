class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(root1, root2) {
        this.root1 = root1
        this.root2 = root2
    }

    getMirror() {
        if(this.root1 === null) {
            return null
        } else if(this.root1.left === null && this.root1.right === null) {
            return this.root1
        } else {
            let rootNode = this.root1
            const mirror = (rootNode) => {
                let tempNode = rootNode.left
                rootNode.left = rootNode.right
                rootNode.right = tempNode
                rootNode.left && mirror(rootNode.left)
                rootNode.right && mirror(rootNode.right)
            }
            mirror(rootNode)
            return rootNode
        }
    }

    isMirror() {
        if(this.root1 === null && this.root2 === null) {
            return true
        } else if((this.root1.left === null && this.root1.right === null) && (this.root2.left === null && this.root2.right === null)) {
            return true
        } else {
            let rootNode1 = this.root1.left
            let rootNode2 = this.root1.right

            const isSymmetric = (rootNode1, rootNode2) => {
                const preOrderFunc = (node, res) => {
                    res.push(node.data)
                    node.left && preOrderFunc(node.left, res)
                    node.right && preOrderFunc(node.right, res)
                    return res
                }

                const reversePreOrderFunc = (node, res) => {
                    res.push(node.data)
                    node.right && reversePreOrderFunc(node.right, res)
                    node.left && reversePreOrderFunc(node.left, res)
                    return res
                }

                let preOrder = preOrderFunc(rootNode1, [])
                let reversePreOrder = reversePreOrderFunc(rootNode2, [])

                if(preOrder.length !== reversePreOrder.length) {
                    return false
                }

                for(let i=0; i<preOrder.length; i++) {
                    if(preOrder[i] !== reversePreOrder[i]) {
                        return false
                    }
                }
                return true
            }
            return isSymmetric(rootNode1, rootNode2)
        }
    }

    isSymmetric() {
        if(this.root1 === null) {
            return true
        } else {
            const check = (left, right) => {
                if(left === null && right === null) {
                    return true
                }
                if(left === null || right === null) {
                    return false
                }
                if(left.data !== right.data) {
                    return false
                }
                return check(left.left, right.right) && check(left.right, right.left)
            }

            return check(this.root1.left, this.root1.right)
        }
    }

    isSymmetricIter() {
        if(this.root1 === null) {
            return true
        } else {
            const check = (left, right) => {
                let q1 = [left]
                let q2 = [right]

                while(q1.length || q2.length) {
                    let n1 = q1.pop()
                    let n2 = q2.pop()

                    if(!n1 && !n2) {
                        return true
                    }
                    if(!n1 || !n2) {
                        return false
                    }
                    if(n1.data !== n2.data) {
                        return false
                    }

                    q1.push(n1.left)
                    q1.push(n1.right)

                    q2.push(n2.right)
                    q2.push(n2.left)
                }
                return true
            }

            return check(this.root1.left, this.root1.right)
        }
    }
}
const rootNode1 = new Node(1)
rootNode1.left = new Node(2)
rootNode1.right = new Node(2)
rootNode1.left.left = new Node(4)
rootNode1.left.right = new Node(3)
rootNode1.right.left = new Node(3)
rootNode1.right.right = new Node(4)

const rootNode2 = new Node(1)
rootNode2.left = new Node(3)
rootNode2.right = new Node(2)
rootNode2.left.right = new Node(6)
rootNode2.right.left = new Node(5)
rootNode2.right.right = new Node(4)

const binaryTree = new BinaryTree(rootNode1, rootNode2)
console.log(binaryTree.getMirror())
console.log(binaryTree.isMirror())
console.log(binaryTree.isSymmetric())
console.log(binaryTree.isSymmetricIter())