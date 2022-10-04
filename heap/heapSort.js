class HeapSort {
    constructor(array) {
        this.array = array
    }

    heapify(arr, index, size) {
        let largest = index
        let l = 2 * index + 1
        let r = 2 * index + 2

        if(l < size && arr[l] > arr[largest]) {
            largest = l
        }

        if(r < size && arr[r] > arr[largest]) {
            largest = r
        }

        if(largest !== index) {
            [arr[index], arr[largest]] = [arr[largest], arr[index]]
            this.heapify(arr, largest, size)
        }
    }

    sort() {
        let length = this.array.length
        // build heap
        for(let i = Math.floor((length - 1) / 2); i >= 0; i--) {
            this.heapify(this.array, i, length)
        }

        //extract max value from heap
        for(let i=length - 1; i > 0; i--) {
            let max = this.array[0]
            this.array[0] = this.array[i]
            this.array[i] = max

            this.heapify(this.array, 0, i)
        }

        return this.array
    }
}

const heapSort = new HeapSort([1, 14, 10, 8, 7, 9, 3, 2, 4, 6])
console.log(heapSort.sort())