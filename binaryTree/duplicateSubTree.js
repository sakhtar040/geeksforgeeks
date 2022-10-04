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
        this.mark = "$"
    }

    checkDuplicateSubTree() {
        const set = new Set()
        let rootNode = this.root
        let list = []
        const check = (node, set, ls) => {
            let str = ""
            if(node === null) {
                return str + this.mark
            }

            let lStr = check(node.left, set, ls)
            if(lStr === str) {
                return str
            }

            let rStr = check(node.right, set, ls)
            if(rStr === str) {
                return str
            }

            str = str + node.data + lStr + rStr
            if(str.length > 2 && set.has(str)) {
                ls.push(node)
            }

            set.add(str)
            return str
        }
        //check(rootNode, set, list)

        let map = new Map()
        let listt = []
        const dfs = (root, map, res) => {
            if(!root) return '#'
            const subtree = `${root.data}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
            console.log(subtree, map)
            map.set(subtree,(map.get(subtree)||0) + 1)
            if(map.get(subtree) === 2){
                res.push(root)
            }
            return subtree
        }

        dfs(rootNode, map, listt)
        return listt
    }
}

const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(2)
rootNode.left.left = new Node(4)
rootNode.left.left.left = new Node(5)
rootNode.left.right = new Node(6)
rootNode.right.left = new Node(4)
rootNode.right.left.left = new Node(5)
rootNode.right.right = new Node(6)

const binaryTree = new BinaryTree(rootNode)
console.log(binaryTree.checkDuplicateSubTree())