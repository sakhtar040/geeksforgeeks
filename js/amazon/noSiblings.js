class Solution {
    noSibling(root){
        //code here
        if(root == null) {
            return [-1]
        }
        let res = []
        let queue = [root]
        while(queue.length) {
            let tempNode = queue.shift()
            tempNode.left && queue.push(tempNode.left)
            tempNode.right && queue.push(tempNode.right)
            if(tempNode.left == null && tempNode.right != null) {
                res.push(tempNode.right.data)
            }
            if(tempNode.left != null && tempNode.right == null) {
                res.push(tempNode.left.data)
            }
        }
        res.sort((a, b) => a - b)
        return res.length == 0 ? [-1] : res
    }
}