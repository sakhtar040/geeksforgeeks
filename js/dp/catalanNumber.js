const catalanNumber = (n) => {
    if(n <= 1) {
        return 1
    }
    let res = 0
    for(let i=0; i<n; i++) {
        res += catalanNumber(i) * catalanNumber(n-i-1)
    }
    return res
}

console.log(catalanNumber(4))

const _catalanNumber = (n) => {
    let dp = []
    dp[0] = dp[1] = 1

    for(let i=2; i<=n; i++) {
        dp[i] = 0
        for(let j=0; j<i; j++) {
            dp[i] += dp[j] * dp[i-j-1]
        }
    }
    return dp[n]
}

console.log(_catalanNumber(4))