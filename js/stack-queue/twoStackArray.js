class TwoStack {
    constructor(n) {
        this.stack = new Array(n).fill(0)
        let halfLength = Math.floor((this.stack.length) / 2)
        this.stack1 = halfLength + 1
        this.stack2 = halfLength
    }

    print() {
        console.log(this.stack, this.stack.length, this.stack1, this.stack2)
    }

    push1(item) {
        if(this.stack1 > 0) {
            this.stack1--
            this.stack[this.stack1] = item
        } else {
            console.log("Stack1 Overflow")
        }
    }

    push2(item) {
        if(this.stack2 < this.stack.length - 1) {
            this.stack2++
            this.stack[this.stack2] = item
        } else {
            console.log("Stack2 Overflow")
        }
    }

    pop1() {
        let mid = Math.floor(this.stack.length / 2) + 1
        if(this.stack1 < mid) {
            this.stack[this.stack1] = 0
            this.stack1++
        } else {
            console.log("Stack1 is empty")
        }
    }

    pop2() {
        let mid = Math.floor(this.stack.length / 2)
        if(this.stack2 > mid) {
            this.stack[this.stack2] = 0
            this.stack2--
        } else {
            console.log("Stack2 is empty")
        }
    }
}

const stack = new TwoStack(5)
stack.print()
stack.push1(1)
stack.push2(2)
stack.push1(3)
stack.push2(4)
stack.push1(5)
stack.push1(6)
stack.push2(7)
stack.print()
stack.pop1()
stack.print()
stack.pop1()
stack.print()
stack.pop1()
stack.print()
stack.pop1()
stack.print()
stack.pop2()
stack.print()
stack.pop2()
stack.print()
stack.pop2()
stack.print()
