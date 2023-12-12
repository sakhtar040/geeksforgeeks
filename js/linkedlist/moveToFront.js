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

    printList() {
        let current = this.head
        let list = ""
        while(current) {
            list = list + current.data + " -> "
            current = current.next
        }

        return list + "null"
    }

    moveToFront() {
        if(this.head == null) {
            return null
        } else {
            let currentNode = this.head
            let prevNode = null

            while(currentNode.next) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            currentNode.next = this.head
            this.head = currentNode
            prevNode.next = null
        }

        return this.printList()
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
console.log(linkedList.moveToFront())

