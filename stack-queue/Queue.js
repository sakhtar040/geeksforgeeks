class Queue {
    constructor() {
        this.queue = []
    }

    getQueue() {
        console.log(this.queue)
    }

    enqueue(item) {
        this.queue[this.queue.length] = item
    }

    rotate(arr, n) {
        let temp = arr[0];
        for(let i=0; i< arr.length; i++) {
            arr[i] = arr[i+1]
        }
        arr[arr.length -1] = temp;
    }

    dequeue() {
        for(let i=0; i<1; i++) {
            this.rotate(this.queue, this.queue.length)
        }
        this.queue.length--
    }

    peek() {
        return this.queue[0]
    }
}

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(1)
console.log(queue.peek())
queue.dequeue()
console.log(queue.peek())
queue.enqueue(4)
queue.enqueue(0)
queue.enqueue(5)
queue.getQueue()
console.log(queue.peek())
queue.dequeue()
queue.dequeue()
queue.getQueue()
queue.dequeue()
queue.dequeue()
queue.getQueue()
console.log(queue.peek())