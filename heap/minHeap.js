class MinHeap {
    constructor() {
        this.heap = []
    }

    parent(index) {
        return Math.floor(index / 2)
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insertItem(item) {
        this.heap.push(item)
        let currentIndex = this.heap.length - 1
        let parentIndex = this.parent(currentIndex)

        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex
            parentIndex = this.parent(parentIndex)
        }
    }

    leftChild(index) {
        return index * 2 + 1
    }

    rightChild(index) {
        return index * 2 + 2
    }

    removeItem() {
        let length = this.heap.length
        if(length) {
            this.heap[0] = this.heap[length-1]
            this.heap.splice(length-1)

            if(length === 2) {
                if(this.heap[1] > this.heap[2]) {
                    this.swap(1, 2)
                }
                return
            }

            let current = 0
            let leftChildIndex = this.leftChild(current)
            let rightChildIndex = this.rightChild(current)

            while(this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[current] >= this.heap[leftChildIndex] || this.heap[current] >= this.heap[rightChildIndex])) {
                if(this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    this.swap(current, leftChildIndex)
                    current = leftChildIndex
                } else {
                    this.swap(current, rightChildIndex)
                    current = rightChildIndex
                }

                leftChildIndex = this.leftChild(current)
                rightChildIndex = this.rightChild(current)
                if(this.heap[leftChildIndex] === undefined || this.heap[rightChildIndex] === undefined) {
                    break
                }
            }
        } else if(length === 1) {
            this.heap = []
        } else {
            return null
        }
    }
}

const minHeap = new MinHeap()
minHeap.insertItem(10)
minHeap.insertItem(20)
minHeap.insertItem(15)
minHeap.insertItem(30)
minHeap.insertItem(40)
console.log(minHeap.heap)
minHeap.removeItem()
minHeap.removeItem()
console.log(minHeap.heap)