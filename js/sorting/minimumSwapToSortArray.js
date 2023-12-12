const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const minSwap = (arr) => {
    let sortedArray = [...arr]
    sortedArray = sortedArray.sort((a, b) => a - b)
    let count = 0
    let map = {}
    for(let i=0; i<arr.length; i++) {
        map[arr[i]] = i
    }

    console.log(map, sortedArray)
    for(let i=0; i<sortedArray.length; i++) {
        if(sortedArray[i] !== arr[i]) {
            count++
            let val = arr[i]
            swap(arr, i, map[sortedArray[i]])
            map[val] = map[sortedArray[i]]
            map[sortedArray[i]] = i
        }
    }
    return count;
}

console.log(minSwap([10, 19, 6, 3, 5]))