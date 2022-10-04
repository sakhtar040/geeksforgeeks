// K Sorted Array

const nearlySortedArray = (arr, k) => {
    let queue = []
    for(let i=0; i<k+1; i++) {
        queue.push(arr[i])
    }

    queue.sort((a, b) => a-b)

    let index = 0
    for(let i=k+1; i<arr.length; i++) {
        arr[index++] = queue[0]
        queue.shift()
        queue.push(arr[i])
        queue.sort((a, b) => a-b)
    }

    while(queue.length !== 0) {
        arr[index++] = queue[0]
        queue.shift()
    }

    return arr
}

console.log(nearlySortedArray([6, 5, 3, 2, 8, 10, 9], 6))