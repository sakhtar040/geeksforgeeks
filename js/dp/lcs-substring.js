const lcs = (str1, str2) => {
    let n = str1.length
    let m = str2.length
    if(n === 0 || m === 0) {
        return 0
    }

    let dp = new Array(n+1).fill(0).map(()=>Array(m + 1).fill(0))
    let res = 0
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<m+1; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            } else if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                res = Math.max(res, dp[i][j])
            } else {
                dp[i][j] = 0
            }
        }
    }
    return res
}

console.log(lcs("absife", "abscfe"))