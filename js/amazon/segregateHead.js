class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head) {
        //your code here
        let arr = []
        let currentNode = head
        while(currentNode) {
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        arr.sort((a, b) => a-b)
        let root = null
        for(let i=arr.length-1; i>=0; i--) {
            let tempNode = new Node(arr[i])
            tempNode.next = root
            root = tempNode
        }
        return root
    }
}