class StackUsingQueue {
    constructor() {
        this.q1 = []
        this.q2 = []
        this.siz = 0
    }

    push(val) {
        this.siz++
        this.q2.push(val)

        while(this.q1.length) {
            this.q2.push(this.q1.shift())
        }

        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    pop() {
        if(this.q1 === []) {
            return null
        } else {
            this.siz--
            this.q1.shift()
        }
    }

    size() {
        console.log(this.siz)
    }

    print() {
        console.log(this.q1)
    }
}

const stack = new StackUsingQueue()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.size()
stack.pop()
stack.size()
stack.print()