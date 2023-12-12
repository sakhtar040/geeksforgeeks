class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2)
    {
        //your code here
        if(root1==null && root2==null) return true;
        else if((root1!=null && root2!=null) && (root1.data==root2.data)){
            return (this.isIdentical(root1.left,root2.left) && this.isIdentical(root1.right,root2.right));
        }
        return false;
    }
}