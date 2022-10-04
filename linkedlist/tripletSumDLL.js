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

    pairSum(target) {
        if(this.head == null) {
            return null
        } else {
            let triplets = []
            let first = this.head
            let second = first.next
            let third = this.head

            while(third.next) {
                third = third.next
            }

            while(first.next) {
                while(second !== null && third != null) {
                    let newTarget = first.data + second.data + third.data
                    if(newTarget === target) {
                        triplets.push([first.data, second.data, third.data])
                        second = second.next
                        third = third.prev
                    } else if(newTarget < target) {
                        second = second.next
                    } else {
                        third = third.prev
                    }
                }
                first = first.next
                second = first.next
                third = this.head

                while(third.next) {
                    third = third.next
                }
            }

            return triplets
        }
    }
}

const ll = new Node(1)
ll.next = new Node(2)
ll.next.prev = ll
ll.next.next = new Node(4)
ll.next.next.prev = ll.next
ll.next.next.next = new Node(5)
ll.next.next.next.prev = ll.next.next
ll.next.next.next.next = new Node(6)
ll.next.next.next.next.prev = ll.next.next.next
ll.next.next.next.next.next = new Node(8)
ll.next.next.next.next.next.prev = ll.next.next.next.next
ll.next.next.next.next.next.next = new Node(9)
ll.next.next.next.next.next.next.prev = ll.next.next.next.next.next


const linkedList = new LinkedList(ll)
console.log(linkedList.pairSum(17))

