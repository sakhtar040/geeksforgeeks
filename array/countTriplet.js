const countTriplet = (arr, target) => {
    let n = arr.length
    let count = 0
    arr.sort((a, b) => b-a)
    console.log(arr)
    for(let i=0; i<n-2; i++) {
        let j = i+1
        let k = n-1
        while(j < k) {
            if((arr[i] + arr[j] + arr[k]) >= target) {
                k--
            } else if ((arr[i] + arr[j] + arr[k]) < target) {
                count += (k-j)
                j++
            }
        }
    }
    return count
}

console.log(countTriplet([-2, 0, 1, 3], 2))