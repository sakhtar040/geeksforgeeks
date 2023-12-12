class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addItemAtBeg(data) {
        let node = new Node(data)
        node.next = this.head
        this.head = node
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
                count++
                if(count === index) {
                    break
                }
                currentNode = currentNode.next
            }
            let newNode = new Node(data)
            newNode.next = currentNode.next
            currentNode.next = newNode
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
            currentNode.next = new Node(data)
        }
    }

    removeItem(data) {
        if(this.head === null) {
            console.log("Linked List Empty")
        } else if(this.head.data === data) {
            let currentNode = this.head
            this.head = currentNode.next ? currentNode.next : null
        } else {
            let currentNode = this.head
            while (currentNode) {
                if(currentNode.next.data === data) {
                    break
                }
                currentNode = currentNode.next
            }
            currentNode.next = currentNode.next ? currentNode.next.next : null
        }
    }

    printList() {
        let currentNode = this.head
        let list = ""
        while(currentNode) {
            list += currentNode.data + " -> "
            currentNode = currentNode.next
        }

        console.log(list, currentNode)
    }
}

const linkedList = new LinkedList();
linkedList.addItemAtBeg(1)
linkedList.addItemAtBeg(2)
linkedList.addItemAtEnd(3)
linkedList.addItemInBTW(4, 1)
//linkedList.removeItem(4)
linkedList.printList()
