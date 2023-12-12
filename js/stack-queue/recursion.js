class Recursion {
    constructor(st1, st2) {
        this.st1 = st1;
        this.st2 = st2;
    }

    insertAtBottom(item) {
        if(this.st1.length === 0) {
            this.st1.push(item)
        } else {
            let a = this.st1.pop()
            this.insertAtBottom(item)
            this.st1.push(a)
        }
    }

    reverseStack() {
        if(this.st1.length) {
            let item = this.st1.pop()
            this.reverseStack()
            this.insertAtBottom(item)
        }
        console.log(this.st1)
    }

    insertSortedItem(item) {
        if(this.st2.length === 0 || item > this.st2[this.st2.length - 1]) {
            this.st2.push(item)
        } else {
            let temp = this.st2.pop()
            this.insertSortedItem(item)
            this.st2.push(temp)
        }
    }

    sortStack() {
        if(this.st2.length) {
            let temp = this.st2.pop()
            this.sortStack()
            this.insertSortedItem(temp)
        }
        console.log(this.st2)
    }
}

const recursion = new Recursion([1, 2, 3, 4, 5], [-3, 14, 18, -5, 30])
recursion.reverseStack()
console.log("-------------------")
recursion.sortStack()