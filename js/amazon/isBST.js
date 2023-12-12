class Solution
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root)
    {
        if(root == null){
            return null
        }

        return this.isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
    }

    isBSTUtil(root, min, max) {
        if(root == null) {
            return 1
        }

        if(root.data < min|| root.data > max) {
            return 0
        }

        return this.isBSTUtil(root.left, min, root.data-1) && this.isBSTUtil(root.right, root.data+1, max);
    }
}