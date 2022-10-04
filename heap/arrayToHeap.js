class ArrayToHeap {
    constructor(array) {
        this.array = array;
    }

    toMaxHeap() {
        const heapify = (array) => {
            for(let i=Math.floor((array.length / 2) - 1); i>=0; i--) {
                let largest
                const maxHeapify = (arr, i) => {
                    let l = 2 * i + 1
                    let r = 2 * i + 2

                    if(l <= arr.length && arr[i] < arr[l]) {
                        largest = l
                    } else {
                        largest = i
                    }

                    if(r <= arr.length && arr[r] > arr[largest]) {
                        largest = r
                    }

                    if(largest !== i) {
                        [arr[i], arr[largest]] = [arr[largest], arr[i]]
                        maxHeapify(arr, largest)
                    }
                }
                maxHeapify(array, i)
            }
            return array
        }
        return heapify(this.array)
    }

    toMinHeap() {
        const heapify = (array) => {
            for(let i=Math.floor((array.length / 2) - 1); i>=0; i--) {
                let smallest
                const minHeapify = (arr, i) => {
                    let l = 2 * i + 1
                    let r = 2 * i + 2

                    if(l <= arr.length && arr[i] > arr[l]) {
                        smallest = l
                    } else {
                        smallest = i
                    }

                    if(r <= arr.length && arr[r] < arr[smallest]) {
                        smallest = r
                    }

                    if(smallest !== i) {
                        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
                        minHeapify(arr, smallest)
                    }
                }
                minHeapify(array, i)
            }
            return array
        }
        return heapify(this.array)
    }
}

const toHeap = new ArrayToHeap([3, 6, 5, 0, 8, 2, 1, 9])
console.log(toHeap.toMaxHeap())
console.log(toHeap.toMinHeap())