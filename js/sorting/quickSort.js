const partition = (arr, l, r) => {
    let i = l-1

    for(let j=l; j<r; j++) {
        if(arr[j] < arr[r]) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    let temp = arr[i+1]
    arr[i+1] = arr[r]
    arr[r] = temp

    return i + 1
}

const quickSort = (arr, l, r) => {
    if(l < r) {
        let p = partition(arr, l, r)
        quickSort(arr, l, p-1)
        quickSort(arr, p+1, r)
    }
    return arr
}

console.log(quickSort([1,9,2,8,3,7,4,6,5], 0, 9))