class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    reverse() {
        if(this.head == null) {
            return null
        } else {
            let currentNode = this.head
            let prevNode = null
            let nextNode = null

            while(currentNode) {
                nextNode = currentNode.next
                currentNode.next = prevNode
                prevNode = currentNode
                currentNode = nextNode
            }
            this.head = prevNode
            return this.head
        }
    }
}

const ll = new Node(1)
ll.next = new Node(2)
ll.next.next = new Node(3)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(5)
ll.next.next.next.next.next = new Node(6)
ll.next.next.next.next.next.next = new Node(7)


const linkedList = new LinkedList(ll)
console.log(linkedList.reverse())

