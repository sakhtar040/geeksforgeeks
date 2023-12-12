class Element {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(val, priority) {
        let contains = false
        let element = new Element(val, priority)
        for(let i=0; i<this.queue.length; i++) {
            if(element.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, element)
                contains = true
                break
            }
        }

        if(!contains) {
            this.queue.push(element)
        }
    }

    dequeue() {
        return this.isEmpty() ? "Empty Queue" : this.queue.shift()
    }

    front() {
        return this.queue[0]
    }

    rear() {
        return this.queue[this.queue.length - 1]
    }

    print() {
        return this.queue
    }

    isEmpty() {
        return this.queue.length === 0
    }

    size() {
        return this.queue.length
    }
}

const queue = new PriorityQueue()
queue.enqueue("Shahbaz", 2)
queue.enqueue("Tabish", 1)
queue.enqueue("Sumit", 2)
queue.enqueue("Gourav", 1)
queue.enqueue("Piyush", 1)
queue.enqueue("Sunny", 2)
queue.enqueue("Sheru", 3)

console.log(queue.print())

console.log(queue.front())
console.log(queue.rear())
console.log(queue.size())

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.print())

console.log(queue.front())
console.log(queue.rear())
console.log(queue.size())