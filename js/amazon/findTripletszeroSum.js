findTriplets = (arr, n) => {
    //your code here
    let X = 0
    arr.sort((a, b) => a - b)
    for(let i=0; i<n; i++) {
        let remTarget = X - arr[i]
        let j = i+1
        let k = n-1
        while(j < k) {
            if((arr[j] + arr[k]) > remTarget) {
                k--
            } else if ((arr[j] + arr[k]) < remTarget) {
                j++
            } else {
                return true
            }
        }
    }
    return false
}