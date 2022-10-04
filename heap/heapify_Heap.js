class Heapify_Heap {
    constructor(heap) {
        this.heap = heap
    }

    toMaxHeap(i) {
        const leftIndex = (index) => {
            return 2 * index + 1
        }

        const rightIndex = (index) => {
            return 2 * index + 2
        }
        let largest
        const maxHeapify = (array, i) => {
            let l = leftIndex(i)
            let r = rightIndex(i)
            if(l <= array.length && array[i] < array[l]) {
                largest = l
            } else {
                largest = i
            }

            if(r <= array.length && array[r] > array[largest]) {
                largest = r
            }

            if(largest !== i) {
                [array[i], array[largest]] = [array[largest], array[i]]
                maxHeapify(array, largest)
            }
            return array
        }
        return maxHeapify(this.heap, i)
    }

    toMinHeap(i) {
        const leftIndex = (index) => {
            return 2 * index + 1
        }

        const rightIndex = (index) => {
            return 2 * index + 2
        }
        let smallest
        const minHeapify = (array, i) => {
            let l = leftIndex(i)
            let r = rightIndex(i)
            if(l <= array.length && array[i] > array[l]) {
                smallest = l
            } else {
                smallest = i
            }

            if(r <= array.length && array[r] < array[smallest]) {
                smallest = r
            }

            if(smallest !== i) {
                [array[i], array[smallest]] = [array[smallest], array[i]]
                minHeapify(array, smallest)
            }
            return array
        }
        return minHeapify(this.heap, i)
    }
}

const heapify = new Heapify_Heap([1, 14, 10, 8, 7, 9, 3, 2, 4, 6])
console.log(heapify.toMaxHeap(0))
console.log(heapify.toMinHeap(0))