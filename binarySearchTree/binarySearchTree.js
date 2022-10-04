class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertNode(data) {
        if(this.root == null) {
            this.root = new Node(data)
        } else {
            let rootNode = this.root
            const insert = (node, data) => {
                if(node === null) {
                    node = new Node(data)
                    return node
                }

                if(data > node.data) {
                    node.right = insert(node.right, data)
                } else {
                    node.left = insert(node.left, data)
                }

                return node
            }
            this.root = insert(rootNode, data)
        }
    }

    inOrder() {
        if(this.root === null) {
            return "Empty Tree"
        } else {
            const list = []
            let rootNode = this.root
            const traverse = (rootNode) => {
                rootNode.left && traverse(rootNode.left)
                list.push(rootNode.data)
                rootNode.right && traverse(rootNode.right)
            }
            traverse(rootNode)
            return list
        }
    }

    preOrder() {
        if(this.root === null) {
            return "Empty Tree"
        } else {
            const list = []
            let rootNode = this.root
            const traverse = (rootNode) => {
                list.push(rootNode.data)
                rootNode.left && traverse(rootNode.left)
                rootNode.right && traverse(rootNode.right)
            }
            traverse(rootNode)
            return list
        }
    }

    postOrder() {
        if(this.root === null) {
            return "Empty Tree"
        } else {
            const list = []
            let rootNode = this.root
            const traverse = (rootNode) => {
                rootNode.left && traverse(rootNode.left)
                rootNode.right && traverse(rootNode.right)
                list.push(rootNode.data)
            }
            traverse(rootNode)
            return list
        }
    }

    printBST() {
        if(this.root === null) {
            return "Empty Tree"
        } else {
            console.log("InOrder: ", this.inOrder())
            console.log("PreOrder: ", this.preOrder())
            console.log("PostOrder: ", this.postOrder())
        }
    }

    searchKey(key) {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            const search = (node, key) => {
                if(node === null) {
                    return false
                }

                if(node.data === key) {
                    return true
                }

                if(node.data > key) {
                    return search(node.left, key)
                } else {
                    return search(node.right, key)
                }
            }
            return search(rootNode, key)
        }
    }

    deleteNode(key) {
        if(this.root === null) {
            return null
        } else {
            let rootNode = this.root
            const deleteKey = (node, key) => {
                if(node === null) {
                    return null
                }

                if(node.data === key) {
                    if(node.left === null ) {
                        return node.right
                    } else if(node.right === null) {
                        return node.left
                    } else {
                        let tempNode = node.right
                        while(tempNode.left) {
                            tempNode = tempNode.left
                        }
                        node.data = tempNode.data
                        node.right = deleteKey(node.right, node.data)
                    }
                } else if(node.data > key) {
                    node.left =  deleteKey(node.left, key)
                } else {
                    node.right = deleteKey(node.right, key)
                }
                return node
            }
            this.root = deleteKey(rootNode, key)
        }
    }
}

const bst = new BinarySearchTree()
bst.insertNode(1)
bst.insertNode(2)
bst.insertNode(3)
bst.insertNode(4)
bst.insertNode(5)
bst.insertNode(6)
bst.insertNode(7)
bst.insertNode(8)
bst.insertNode(9)
bst.printBST()
console.log(bst.searchKey(9))
bst.deleteNode(1)
//bst.deleteNode(2)
bst.printBST()