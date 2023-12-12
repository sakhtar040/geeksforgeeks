// Recursive Approach
const binarySearch1 = (arr, l, h, x) => {
    if(h >= l) {
        let mid = l + Math.floor((h - l) / 2)
        if(arr[mid] === x) {
            return true
        } else if(arr[mid] > x) {
            return binarySearch1(arr, l, mid - 1, x)
        } else {
            return binarySearch1(arr, mid + 1, h, x)
        }
    }
    return false
}

//Iterative Approach
const binarySearch2 = (arr, x) => {
    let l = 0
    let h = arr.length - 1

    while(h >= l) {
        let mid = l + Math.floor((h - l) / 2)
        if(arr[mid] === x) {
            return true
        } else if(arr[mid] > x) {
            h = mid - 1
        } else {
            l = mid + 1
        }
    }
    return false
}

console.log(binarySearch1([1,2,3,4,5,6,7,8,9], 0, 9, 5));
console.log(binarySearch2([1,2,3,4,5,6,7,8,9], 1))