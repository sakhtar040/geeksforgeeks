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

    checkLevel() {
        if(this.root === null) {
            return true
        } else {
            let rootNode = this.root
            let queue = [rootNode]
            let level = 0
            let maxLevel = Number.MAX_VALUE

            while(queue.length) {
                let size = queue.length
                level++
                while(size > 0) {
                    let tempNode = queue.shift()
                    if(tempNode.left) {
                        queue.push(tempNode.left)
                        if(tempNode.left.left === null && tempNode.left.right === null) {
                            if(maxLevel === Number.MAX_VALUE) (maxLevel = level)
                            else if(maxLevel !== level) return false
                        }
                    }
                    if(tempNode.right) {
                        queue.push(tempNode.right)
                        if(tempNode.left.left === null && tempNode.left.right === null) {
                            if(maxLevel === Number.MAX_VALUE) (maxLevel = level)
                            else if(maxLevel !== level) return false
                        }
                    }
                    size--
                }
            }
            return maxLevel == level
        }
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)
rootNode.left.left = new Node(4)
rootNode.left.right = new Node(6)
rootNode.right.left = new Node(7)
rootNode.right.right = new Node(3)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.checkLevel())