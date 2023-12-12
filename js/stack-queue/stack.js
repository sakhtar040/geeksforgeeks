class Stack {
    constructor() {
        this.stack = []
        this.increment = []
        this.lastIncValue = 0
        this.minStack = []
    }

    getStack() {
        console.log(this.stack)
    }

    push(item) {
        this.stack[this.stack.length] = item
        this.increment[this.increment.length] = 0
        if(this.minStack.length === 0) {
            this.minStack[this.minStack.length] = item
        } else {
            if(item < this.minStack[this.minStack.length - 1]) {
                this.minStack[this.minStack.length] = item
            }
        }
    }

    pop() {
        if(this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.length = this.minStack.length === 0 ? this.minStack.length : this.minStack.length - 1
        }
        this.stack.length = this.stack.length === 0 ? this.stack.length : this.stack.length - 1
        this.increment.length = this.increment.length === 0 ? this.increment.length : this.increment.length - 1
    }

    peek() {
        let currIndex = this.stack.length - 1
        if(currIndex > this.lastIncValue) {
            return this.stack[currIndex] + this.increment[this.lastIncValue]
        } else {
            return this.stack.length ? this.stack[this.stack.length - 1] + this.increment[this.increment.length - 1] : []
        }
    }

    inc(index, val) {
        this.increment[index] = val
        this.lastIncValue = index
    }

    getMin() {
        console.log(this.minStack[this.minStack.length - 1])
    }

    rightRotate(arr, n) {
        let temp = arr[n - 1];
        for(let i=n-1; i>0; i--) {
            arr[i] = arr[i-1]
        }
        arr[0] = temp
    }

    rotateStackByOne(index) {
        for(let i=0; i<index; i++) {
            this.rightRotate(this.stack, this.stack.length);
        }
    }

    insertAtBottom(val) {
        this.stack.push(val)
        this.rotateStackByOne(1)
        return this.stack
    }
}

const stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(1)
//console.log(stack.peek())
//stack.pop()
//console.log(stack.peek())
stack.push(4)
stack.push(0)
stack.push(5)
stack.getStack()
//stack.inc(0, 4)
//console.log(stack.peek())
// stack.pop()
// stack.pop()
// stack.getStack()
// stack.pop()
// stack.pop()
// stack.getStack()
// //console.log(stack.peek())
// stack.getMin()
console.log(stack.insertAtBottom(34))