const lcs = (str) => {
    let str1 = str
    let n = str1.length
    let str2 = str
    let m = str2.length
    if(n === 0 || m === 0) {
        return 0
    }

    let dp = new Array(n+1).fill(new Array(m+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<m+1; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            } else if(str1[i-1] === str2[j-1] && i !== j) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[n][m]
}

console.log(lcs("aabebcdd"))