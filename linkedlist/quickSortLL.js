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

    printList(current) {
        let list = ""
        while(current) {
            list = list + current.data + " -> "
            current = current.next
        }

        return list + "null"
    }

    partition(currentNode, nextNode) {
        if(currentNode === nextNode || currentNode === null || nextNode === null) {
            return currentNode
        }

        let pivot = nextNode.data
        let i = currentNode
        let j = currentNode

        while(currentNode !== nextNode) {
            if(currentNode.data < pivot) {
                i = j
                let temp = j.data
                j.data = currentNode.data
                currentNode.data = temp
                j = j.next
            }
            currentNode = currentNode.next
        }

        let temp = j.data
        j.data = pivot
        nextNode.data = temp

        return i
    }


    quickSortLL(currentNode, nextNode) {
        if(currentNode == null || currentNode === nextNode || currentNode === nextNode.next) {
            return
        }

        let partition = this.partition(currentNode, nextNode)
        this.quickSortLL(currentNode, partition)

        if(partition != null && partition === currentNode) {
            this.quickSortLL(partition.next, nextNode)
        } else if(partition != null && partition.next != null) {
            this.quickSortLL(partition.next.next, nextNode)
        }
        return currentNode
    }

    sortLL() {
        let currentNode = this.head
        let nextNode = this.head
        while(nextNode.next) {
            nextNode = nextNode.next
        }
        return this.printList(this.quickSortLL(currentNode, nextNode))
    }
}

const ll = new Node(10)
ll.next = new Node(2)
ll.next.next = new Node(30)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(50)
ll.next.next.next.next.next = new Node(6)
ll.next.next.next.next.next.next = new Node(70)


const linkedList = new LinkedList(ll)
console.log(linkedList.sortLL())

