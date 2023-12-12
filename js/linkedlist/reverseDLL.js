class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    printList() {
        let currentNode = this.head
        let list = currentNode.prev + " -> "
        while(currentNode) {
            list += currentNode.data + " -> "
            currentNode = currentNode.next
        }

        console.log(list + "null")
    }

    reverse() {
        if(this.head == null) {
            return null
        } else {
            let currentNode = this.head
            let temp = null

            while(currentNode) {
                temp = currentNode.prev
                currentNode.prev = currentNode.next
                currentNode.next = temp
                currentNode = currentNode.prev
            }
            if(temp != null) {
                this.head = temp.prev
            }
            return this.printList()
        }
    }
}

const ll = new Node(1)
ll.next = new Node(2)
ll.next.prev = ll
ll.next.next = new Node(3)
ll.next.next.prev = ll.next
ll.next.next.next = new Node(4)
ll.next.next.next.prev = ll.next.next


const linkedList = new LinkedList(ll)
console.log(linkedList.reverse())

