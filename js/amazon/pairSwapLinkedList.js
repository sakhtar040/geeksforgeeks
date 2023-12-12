class Solution {
    pairWiseSwap(node){
        //your code here
        if(node == null || node.next == null) {
            return node
        }
        let temp = node.next
        node.next = temp.next
        temp.next = node
        node = temp
        node.next.next = this.pairWiseSwap(node.next.next)
        return node
    }
}