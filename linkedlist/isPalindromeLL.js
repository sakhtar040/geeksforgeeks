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

    isPalindrome() {
        if(this.head == null) {
            return false
        } else {
            let stack = []
            let current = this.head
            while(current) {
                stack.push(current.data)
                current = current.next
            }
            while(this.head) {
                let value = stack.pop()
                if(value !== this.head.data) {
                    return false
                }
                this.head = this.head.next
            }
            return true
        }
    }
}

const ll = new Node(1)
ll.next = new Node(2)
ll.next.next = new Node(3)
ll.next.next.next = new Node(3)
ll.next.next.next.next = new Node(2)
ll.next.next.next.next.next = new Node(1)
//ll.next.next.next.next.next.next = new Node(70)


const linkedList = new LinkedList(ll)
console.log(linkedList.isPalindrome())

