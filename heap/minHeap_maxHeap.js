class MinHeap_MaxHeap {
    constructor(minHeap) {
        this.minHeap = minHeap;
    }

    swap(index1, index2) {
        [this.minHeap[index1], this.minHeap[index2]] = [this.minHeap[index2], this.minHeap[index1]]
    }

    parent(index) {
        return Math.floor(index / 2)
    }

    toMaxHeap() {
        for(let i = this.minHeap.length-1; i>=0; i--) {
            let currentIndex = i
            let parentIndex = this.parent(currentIndex)

            while(currentIndex > 0 && this.minHeap[parentIndex] < this.minHeap[currentIndex]) {
                this.swap(parentIndex, currentIndex)
                currentIndex = parentIndex
                parentIndex = this.parent(parentIndex)
            }
        }
        return this.minHeap
    }
}

const minHeapToMaxHeap = new MinHeap_MaxHeap([3,5,9,6,8,20,10,12,18,9])
console.log(minHeapToMaxHeap.toMaxHeap())