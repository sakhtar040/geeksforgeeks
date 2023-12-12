class Solution {
    // Function to insert a node in a BST.
    insert(node, data) {
        // your code here
        const search = (root, d) => {
            if(root == null) {
                return false
            }

            if(root.data == d) {
                return true
            }

            if(d > root.data) {
                return search(root.right, d)
            } else {
                return search(root.left, d)
            }
        }

        const insert = (root, data) => {
            if(root == null) {
                root = new Node(data)
                return root
            }

            if(data > root.data) {
                root.right = insert(root.right, data)
            } else {
                root.left = insert(root.left, data)
            }
            return root
        }

        if(node == null) {
            return null
        } else {
            let rootNode = node
            if(search(rootNode, data)) {
                return rootNode
            } else {
                return insert(rootNode, data)
            }
        }
    }
}