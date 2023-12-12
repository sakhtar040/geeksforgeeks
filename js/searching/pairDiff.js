const pairDiff = (arr, diff) => {
    let i = 0;
    let j = arr.length
    arr.sort((a, b) => a - b)
    while(i < j) {
        let remDiff = Math.abs(arr[i] - arr[j])
        if(remDiff === diff) {
            return [arr[i], arr[j]]
        } else if(remDiff > diff) {
            j--
        } else {
            j--
            i++
        }
    }

    return false
}


console.log(pairDiff([5, 20, 3, 2, 50, 80], 18)) // 2, 3, 5, 20, 50, 80