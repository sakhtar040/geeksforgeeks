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

    getTopViewByLeftAndRight() {
        if(this.root === null) {
            return []
        } else if(this.root.left === null && this.root.right === null) {
            return [this.root.data]
        } else {
            let rootNode = this.root
            let leftList = []
            let rightList = []
            const leftView = (rootNode, list, ll) => {
                if(rootNode === null) {
                    return
                }

                if(ll === list.length) {
                    list.push(rootNode.data)
                }
                leftView(rootNode.left, list, ll+1)
                leftView(rootNode.right, list, ll+1)
            }
            leftView(rootNode, leftList, 0)
            const rightView = (rootNode, list, rl) => {
                if(rootNode === null) {
                    return
                }

                if(rl === list.length) {
                    list.push(rootNode.data)
                }
                rightView(rootNode.right, list, rl+1)
                rightView(rootNode.left, list, rl+1)
            }
            rightView(rootNode, rightList, 0)
            const reverseList = (arr) => {
                let mid = Math.floor(arr.length / 2)
                for(let i=0; i<mid; i++) {
                    let temp = arr[i]
                    arr[i] = arr[arr.length -1 - i]
                    arr[arr.length -1 - i] = temp
                }
                return arr
            }
            leftList = reverseList(leftList)
            console.log(leftList, rightList)
        }
    }

    getTopView() {
        if(this.root === null) {
            return []
        } else {
            let queue = []
            let map = {}
            queue.push([0, this.root])
            let list = []

            while(queue.length) {
                let [level, node] = queue.shift()
                let tempNode = node

                if(!map.hasOwnProperty(level)) {
                    map[level] = tempNode.data
                    level < 0 ? list.unshift(tempNode.data) : list.push(tempNode.data)
                }

                if(tempNode.left) {
                    queue.push([level - 1, tempNode.left])
                }

                if(tempNode.right) {
                    queue.push([level + 1, tempNode.right])
                }
            }

            return list
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
console.log(binaryTree.getTopViewByLeftAndRight())
console.log(binaryTree.getTopView())