const subArraySum0 = (arr, n) => { // n
    let map = new Map()
    let sum = 0
    let length = 0
    map.set(0, -1)

    for(let i=0; i<n; i++) {
        sum += arr[i]

        if(map.has(sum)) {
            if(i - map.get(sum) > length) {
                length = i - map.get(sum)
            }
        } else {
            map.set(sum, i)
        }
    }
    return length
}

const subArraySum0 = (arr, n) => { // n^2
    let length = 0

    for(let i=0; i<n; i++) {
        let sum = 0
        for(let j=i; j<n; j++) {
            sum += arr[j]
            if(sum === 0) {
                length = Math.max(length, j - i + 1)
            }
        }
    }
    return length
}

console.log(subArraySum0([15,-2,2,-8,1,7,10,23], 8))