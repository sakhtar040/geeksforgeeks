const countDistinct = (A, n, k) => {
    // code here
    let res = []
    let i=0, j=0
    let dis = []
    console.time("start")
    while(i <= n-k) {
        if(j-i+1 < k) {
            if(dis.indexOf(A[j]) == -1) {
                dis.push(A[j])
            }
            j++
        } else if(j-i+1 == k) {
            if(dis.indexOf(A[j]) == -1) {
                dis.push(A[j])
            }
            res.push(dis.length)
            dis = []
            i++
            j = i
        }
    }
    console.timeEnd("start")
    return res
}
let n = 7
let k = 4
let A = [1, 2, 1, 3, 4, 2, 3]
console.log(countDistinct(A, n, k))