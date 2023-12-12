const firstNegNumber = (arr, n, k) => {
    let res = []
    let i=0
    let j=0
    let queue = []
    while(j < n) {
        if(arr[j] < 0) {
            queue.push(arr[j])
        }
        if(j-i+1 < k) {
            j++
        } else if(j-i+1 === k) {
            if(!queue.length) {
                res.push(0)
            } else {
                res.push(queue[0])
                if(queue[0] === arr[i]) {
                    queue.pop()
                }
            }
            i++
            j++
        }
    }
    return res
}

let arr = [-8, 2, 3, -6, 10]
console.log(firstNegNumber(arr, arr.length, 2));