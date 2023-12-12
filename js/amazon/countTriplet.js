const countTriplet = (arr,n) => {
    //code here
    let count = 0
    for(let i=0; i<n; i++) {
        let j=i+1
        while(j < n) {
            let tempSum = arr[i] + arr[j]
            if(arr.indexOf(tempSum) > 0) {
                count++
            }
            j++
        }
    }
    return count
}

console.log(countTriplet([12, 8, 2, 11, 5, 14, 10], 7))