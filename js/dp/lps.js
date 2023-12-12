const lps = (str) => {
    let newStr = str.split("").reverse().join("")
    let n = str.length
    let m = newStr.length

    let dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))

    for(let i=1; i<n+1; i++) {
        for(let j=1; j<m+1; j++) {
            if(str[i-1] === newStr[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[n][m]
}

console.log(lps("agbcba"))