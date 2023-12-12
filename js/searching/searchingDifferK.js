const searching = (arr, k, x) => {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === x) {
            return i
        }
    }
    return -1
}

console.log(searching([20, 40, 50], 20, 70))