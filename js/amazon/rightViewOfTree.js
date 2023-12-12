class Solution {

    rightView(root){
        //your code here
        if(root == null) {
            return null
        } else {
            let result = []
            let maxLevel = 0
            const rightView = (node, level) => {
                if(maxLevel < level) {
                    result.push(node.data)
                    maxLevel = level
                }

                node.right && rightView(node.right, level+1)
                node.left && rightView(node.left, level+1)
            }
            rightView(root, 1);
            return result;
        }
    }
}