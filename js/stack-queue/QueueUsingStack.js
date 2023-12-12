class QueueUsingStack {
    constructor() {
        this.s1 = []
        this.s2 = []
        this.size = 0
    }

    enqueue(val) {
        this.size++
        this.s2.push(val)

        while(this.s1.length) {
            this.s2.push(this.s1.shift())
        }

        let temp = this.s1
        this.s1 = this.s2
        this.s2 = temp
    }

    dequeue() {
        if(this.s1 === []) {
            return null
        } else {
            this.size--
            this.s1.pop()
        }
    }

    getSize() {
        console.log(this.size)
    }

    print() {
        console.log(this.s1)
    }
}

const queue = new QueueUsingStack()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.getSize()
queue.dequeue()
queue.getSize()
queue.print()