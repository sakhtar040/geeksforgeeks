class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
    }

    addItemAtBeg(data) {
        let newNode = new Node(data)
        if(this.head == null) {
            this.head = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    addItemInBTW(data, index) {
        if(this.head === null && index === 0) {
            this.addItemAtBeg(data)
        } else if(index === 0) {
            this.addItemAtBeg(data)
        } else {
            let count = 0
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
                count++
                if(count === index) {
                    break
                }
            }
            let newNode = new Node(data)
            newNode.prev = currentNode.prev
            currentNode.prev.next = newNode
            newNode.next = currentNode
            currentNode.prev = newNode
        }
    }

    addItemAtEnd(data) {
        if(this.head === null) {
            this.addItemAtBeg(data)
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            let newNode = new Node(data)
            newNode.prev = currentNode
            currentNode.next = newNode
            newNode.next = null
        }
    }

    removeItem(data) {
        if(this.head === null) {
            console.log("Linked List Empty")
        } else if(this.head.data === data) {
            let currentNode = this.head
            currentNode.next.prev = currentNode.prev
            currentNode = currentNode.next
            this.head = currentNode
        } else {
            let currentNode = this.head
            while (currentNode) {
                if(currentNode.data === data) {
                    break
                }
                currentNode = currentNode.next
            }
            currentNode.prev.next = currentNode.next ? currentNode.next : null
            currentNode.next && (currentNode.next.prev = currentNode.prev)
        }
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
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addItemAtBeg(1)
doubleLinkedList.addItemAtBeg(2)
doubleLinkedList.addItemAtEnd(3)
doubleLinkedList.addItemInBTW(4, 1)
doubleLinkedList.removeItem(3)
doubleLinkedList.printList()
