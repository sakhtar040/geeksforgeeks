class Solution {
    // return true/false denoting whether the tree is Symmetric or not
    isSymmetric(root){
        //code here
        if(root === null) {
            return true
        } else {
            const check = (left, right) => {
                if(left === null && right === null) {
                    return true
                }
                if(left === null || right === null) {
                    return false
                }
                if(left.key !== right.key) {
                    return false
                }
                return check(left.left, right.right) && check(left.right, right.left)
            }

            return check(root.left, root.right)
        }
    }
}