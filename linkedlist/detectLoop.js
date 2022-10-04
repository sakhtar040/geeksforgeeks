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

    detectLoop() {
        if(this.head == null || this.head.next == null) {
            return false
        } else {
            let currentNode = this.head
            let fastNode = this.head

            while(currentNode && fastNode && fastNode.next) {
                currentNode = currentNode.next
                fastNode = fastNode.next.next

                if(currentNode === fastNode) {
                    return true
                }
            }
            return false
        }
    }

    startingIndexOfLoop() {
        if(this.head == null || this.head.next == null) {
            return false
        } else {
            let currentNode = this.head
            let fastNode = this.head

            while(currentNode && fastNode && fastNode.next) {
                currentNode = currentNode.next
                fastNode = fastNode.next.next

                if(currentNode === fastNode) {
                    break
                }
            }

            if(currentNode !== fastNode) {
                return false
            }

            currentNode = this.head
            while(currentNode !== fastNode) {
                currentNode = currentNode.next
                fastNode = fastNode.next
            }

            return currentNode
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
ll.next.next.next.next.next.next.next = ll.next.next

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
//      ^                        |
//      |________________________|

const linkedList = new LinkedList(ll)
console.log(linkedList.detectLoop())
console.log(linkedList.startingIndexOfLoop())

