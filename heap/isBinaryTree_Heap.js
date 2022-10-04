class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

/*
* 1. check tree isComplete or not
* 2. Min Heap (All root node should be less than or equal to their children)
* 3. Max Heap (All root node should be greater than or equal to their children)
*/
class IsBinaryTree_Heap {
    constructor(tree) {
        this.tree = tree || null
        console.log(this.tree)
    }

    isComplete() {
        let isComplete = false
        let rootNode = this.tree
        let queue = [rootNode]
        while(queue.length) {
            let tempNode = queue.shift()
            if(tempNode.left) {
                if(isComplete) return false
                queue.push(tempNode.left)
            } else {
                isComplete = true
            }

            if(tempNode.right) {
                if(isComplete) return false
                queue.push(tempNode.right)
            } else {
                isComplete = true
            }
        }
        return true
    }

    getSize(node) {
        return node === null ? 0 : 1 + this.getSize(node.left) + this.getSize(node.right)
    }

    isMinHeapUtil(node, index, size) {
        if(node === null) {
            return true
        }

        if(index >= size) {
            return false
        }

        if((node.left && node.left.data < node.data) || (node.right && node.right.data < node.data)) {
            return false
        }

        return this.isMinHeapUtil(node.left, 2 * index + 1, size) && this.isMinHeapUtil(node.right, 2 * index + 2, size)
    }

    isMinHeap() {
        if(this.tree === null) {
            return "Empty Tree is a heap"
        } else {
            let isComplete = this.isComplete()
            if(!isComplete) {
                return "Given tree is not complete"
            }
            return this.isMinHeapUtil(this.tree, 0, this.getSize(this.tree))
        }
    }

    isMaxHeapUtil(node, index, size) {
        if(node === null) {
            return true
        }

        if(index >= size) {
            return false
        }

        if((node.left && node.left.data > node.data) || (node.right && node.right.data > node.data)) {
            return false
        }

        return this.isMaxHeapUtil(node.left, 2 * index + 1, size) && this.isMaxHeapUtil(node.right, 2 * index + 2, size)
    }

    isMaxHeap() {
        if(this.tree === null) {
            return "Empty Tree is a heap"
        } else {
            let isComplete = this.isComplete()
            if(!isComplete) {
                return "Given tree is not complete"
            }
            return this.isMaxHeapUtil(this.tree, 0, this.getSize(this.tree))
        }
    }
}

const node = new Node(10)
node.left = new Node(9)
node.right = new Node(8)
node.left.left = new Node(4)
node.left.right = new Node(5)
node.right.left = new Node(6)
node.right.right = new Node(7)

const isBinaryTreeHeap = new IsBinaryTree_Heap(node)
console.log(isBinaryTreeHeap.isMinHeap())
console.log(isBinaryTreeHeap.isMaxHeap())