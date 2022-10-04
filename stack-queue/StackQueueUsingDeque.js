class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.head = null
        this.tail = null
    }

    size() {
        if(this.head === null) {
            return 0
        } else {
            let length = 0
            let currentNode = this.head
            while(currentNode) {
                length++
                currentNode = currentNode.next
            }
            return length
        }
    }

    isEmpty() {
        return this.head === null;

    }

    insertFirst(data) {
        if(this.isEmpty()) {
            this.head = new Node(data)
            this.tail = this.head
        } else {
            let newNode = new Node(data)
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    insertLast(data) {
        if(this.isEmpty()) {
            this.head = new Node(data)
            this.tail = this.head
        } else {
            let newNode = new Node(data)
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    removeFirst() {
        if(this.isEmpty()) {
            console.log("Already Empty")
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
    }

    removeLast() {
        if(this.isEmpty()) {
            console.log("Already Empty")
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
    }

    print() {
        if(this.isEmpty()) {
            return null
        } else {
            let currentNode = this.head
            let res = []
            while(currentNode) {
                res.push(currentNode.data)
                currentNode = currentNode.next
            }
            return res
        }
    }
}

class Stack {
    constructor() {
        this.deque = new Deque()
    }

    push(val) {
        this.deque.insertLast(val)
    }

    pop() {
        this.deque.removeLast()
    }

    print() {
        return this.deque.print()
    }
}

class Queue {
    constructor() {
        this.deque = new Deque()
    }

    enqueue(val) {
        this.deque.insertLast(val)
    }

    dequeue() {
        this.deque.removeFirst()
    }

    print() {
        return this.deque.print()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.push(4)
console.log(stack.print())

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.enqueue(4)
console.log(queue.print())