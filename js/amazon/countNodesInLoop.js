class Solution {
    //Function to find the length of a loop in the linked list.
    countNodesinLoop(head) {
        //your code here
        if(head == null) {
            return 0
        } else {
            let fastNode = head
            let slowNode = head

            while(fastNode && slowNode && fastNode.next) {
                slowNode = slowNode.next
                fastNode = fastNode.next.next
                if(slowNode == fastNode) {
                    break
                }
            }

            if(slowNode != fastNode) {
                return 0
            }

            slowNode = head
            while(slowNode != fastNode) {
                slowNode = slowNode.next
                fastNode = fastNode.next
            }

            let node = slowNode
            let count = 1
            while(slowNode) {
                slowNode = slowNode.next
                if(slowNode == node) {
                    break
                }
                count++
            }
            return count
        }
    }
}