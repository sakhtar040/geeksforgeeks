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

    getBottomView() {
        if(this.root === null) {
            return []
        } else {
            let queue = []
            let map = {}
            queue.push([0, this.root])

            while(queue.length) {
                let [level, node] = queue.shift()
                let tempNode = node
                map[level] = tempNode.data

                if(tempNode.left) {
                    queue.push([level - 1, tempNode.left])
                }

                if(tempNode.right) {
                    queue.push([level + 1, tempNode.right])
                }
            }

            return Object.keys(map).sort((a, b) => a - b).map(item => map[item])
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
console.log(binaryTree.getBottomView())