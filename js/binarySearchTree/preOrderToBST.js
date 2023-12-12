class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.index = 0
    }

    constructTreeUsingRecursion(preOrder) {
        const construct = (arr, max) => {
            if(this.index === arr.length || arr[this.index] > max) {
                return null
            }

            let root = new Node(arr[this.index++])
            root.left = construct(arr, root.data)
            root.right = construct(arr, max)
            return root
        }

        return construct(preOrder, Number.MAX_VALUE)
    }

    constructTreeUsingIteration(preOrder) {
        let length = preOrder.length
        let stack = []
        let rootNode = new Node(preOrder[0])

        stack.push(rootNode)

        for(let i=1; i<length; i++) {
            let tempNode = null
            while(stack.length > 0 && preOrder[i] > stack[stack.length - 1].data) {
                tempNode = stack.pop()
            }

            if(tempNode !== null) {
                tempNode.right = new Node(preOrder[i])
                stack.push(tempNode.right)
            } else {
                tempNode = stack[stack.length - 1]
                tempNode.left = new Node(preOrder[i])
                stack.push(tempNode.left)
            }
        }
        return rootNode
    }
}

const bst = new BinarySearchTree()
console.log(bst.constructTreeUsingRecursion([10, 8, 7, 9, 12, 11, 13]))
console.log(bst.constructTreeUsingIteration([10, 8, 7, 9, 12, 11, 13]))