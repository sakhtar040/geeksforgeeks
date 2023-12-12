class Solution
{
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2)
    {
        if(root === null) {
            return null
        } else {
            let v1 = false
            let v2 = false

            const calcLCA = (node, n1, n2) => {
                if(node === null) return null

                let tempNode = null

                if(node.data === n1) {
                    v1 = true
                    tempNode = node
                }

                if(node.data === n2) {
                    v2 = true
                    tempNode = node
                }

                let leftLCA = calcLCA(node.left, n1, n2)
                let rightLCA = calcLCA(node.right, n1, n2)

                if(tempNode !== null) {
                    return tempNode
                }

                if(leftLCA !== null && rightLCA !== null) {
                    return node
                }

                return leftLCA !== null ? leftLCA : rightLCA
            }

            let rootNode = root
            let lca = calcLCA(rootNode, n1, n2)

            if(v1 && v2) {
                return lca
            }

            return null
        }
    }
}