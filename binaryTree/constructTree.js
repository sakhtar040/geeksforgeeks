class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor() {
        this.root = null
    }

    treeFromInOrderAndPreOrder() {
        const inOrder = this.inOrderTraversal()
        const preOrder = this.preOrderTraversal()

        const createTree = (p1, p2, l1, l2) => {
            if(p1 > p2 || l1 > l2) {
                return null
            }

            let val = preOrder[p1]
            let rootIndex = inOrder.indexOf(val)
            let leftTreeLength = rootIndex - l1
            let rootNode = new Node(val)
            rootNode.left = createTree(p1 + 1, p1 + leftTreeLength, l1, rootIndex - 1)
            rootNode.right = createTree(p1 + leftTreeLength + 1, p2, rootIndex + 1, l2)

            return rootNode
        }

        return createTree(0, preOrder.length-1, 0, inOrder.length-1)
    }

    treeFromInOrderAndPreOrderUsingMap() {
        const inOrder = this.inOrderTraversal()
        const preOrder = this.preOrderTraversal()

        const map = {}
        for(let i=0; i<inOrder.length; i++) {
            map[inOrder[i]] = i
        }
        const createTree = (start, end, pre) => {
            if(start > end) {
                return null
            }
            let val = pre.shift()
            let index = map[val]
            let rootNode = new Node(val)
            rootNode.left = createTree(start, index - 1, pre)
            rootNode.right = createTree(index + 1, end, pre)
            return rootNode
        }
        return createTree(0, inOrder.length-1, preOrder)
    }

    treeFromInOrderAndPostOrder() {
        const inOrder = this.inOrderTraversal()
        const postOrder = this.postOrderTraversal()

        const createTree = (arr) => {
            if(!arr.length) {
                return null
            }

            let val = postOrder.pop()
            let index = arr.indexOf(val)
            let rootNode = new Node(val)
            rootNode.right = createTree(arr.slice(index+1))
            rootNode.left = createTree(arr.slice(0, index))

            return rootNode
        }

        return createTree(inOrder)
    }

    treeFromInOrderAndPostOrderUsingMap() {
        const inOrder = this.inOrderTraversal()
        const postOrder = this.postOrderTraversal()

        const map = {}
        for(let i = 0; i<inOrder.length; i++) {
            map[inOrder[i]] = i
        }

        const createTree = (l, h) => {
            if(l > h) {
                return null
            }
            let val = postOrder.pop()
            let index = map[val]
            let rootNode = new Node(val)
            rootNode.right = createTree(index + 1, h)
            rootNode.left = createTree(l, index-1)

            return rootNode
        }

        return createTree(0, inOrder.length-1)
    }
}

const binaryTree = new BinaryTree()
console.log(binaryTree.treeFromInOrderAndPreOrder())
console.log(binaryTree.treeFromInOrderAndPostOrder())
console.log(binaryTree.treeFromInOrderAndPostOrderUsingMap())
console.log(binaryTree.treeFromInOrderAndPreOrderUsingMap())