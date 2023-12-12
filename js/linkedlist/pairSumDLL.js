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

    pairSum(target) {
        if(this.head == null) {
            return null
        } else {
            let pairs = []
            let currentNode = this.head
            let lastNode = this.head

            while(lastNode.next) {
                lastNode = lastNode.next
            }

            while(currentNode != lastNode && currentNode.data != lastNode.data) {
                if(currentNode.data + lastNode.data === target) {
                    pairs.push([currentNode.data, lastNode.data])
                    currentNode = currentNode.next
                    lastNode = lastNode.prev
                } else if(currentNode.data + lastNode.data < target) {
                    currentNode = currentNode.next
                } else {
                    lastNode = lastNode.prev
                }
            }

            return pairs
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
console.log(linkedList.pairSum(5))

