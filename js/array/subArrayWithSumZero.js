const sumZero = (arr) => {
    let sum = 0;
    let set = new Set()
    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i]
        if(sum === 0 || set.has(sum)) {
            return true
        }
        set.add(sum)
    }
    return false
}

console.log(sumZero([4, 2, -3, 1, 6]))