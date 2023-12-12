class Solution {
    leftView(root){
        //your code here
        if(root == null) {
            return null
        } else {
            let result = []
            let maxLevel = 0
            const printLeftView = (node, level) => {
                if(maxLevel < level) {
                    result.push(node.data)
                    maxLevel = level
                }
                node.left && printLeftView(node.left, level+1)
                node.right && printLeftView(node.right, level+1)
            }

            printLeftView(root, 1)
            return result
        }
    }
}