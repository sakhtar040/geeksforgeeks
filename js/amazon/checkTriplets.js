//With Sum 0
const check = (arr, n) => {
    let X = 0
    if(n === 0) {
        return false
    } else if(n === 1) {
        return false
    } else {
        arr.sort((a, b) => a - b)
        let triplets = {}
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
        return Object.keys(triplets).length ? 1 : 0
    }
}

console.log(check([0, -1, 2, 3, 1], 5))
