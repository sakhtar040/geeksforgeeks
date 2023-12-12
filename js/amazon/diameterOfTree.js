class Solution {
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
        // your code here
        let diameter = Number.MIN_VALUE
        const getHeight = (rootNode) => {
            if(rootNode === null) {
                return 0
            } else {
                let lHeight = getHeight(rootNode.left)
                let rHeight = getHeight(rootNode.right)
                diameter = Math.max(diameter, 1 + lHeight + rHeight)
                return Math.max(lHeight, rHeight) + 1
            }
        }
        getHeight(root)
        return diameter
    }
}