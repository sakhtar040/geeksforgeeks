const editDistance = (str1, str2) => {
    if(str1 === str2) {
        return 0
    }

    let dp = []
    for(let i=0; i<=str1.length; i++) {
        dp[i] = []
        for(let j=0; j<=str2.length; j++) {
            if(i === 0) {
                dp[i][j] = j
            } else if(j === 0) {
                dp[i][j] = i
            } else if(str1[i-1] !== str2[j-1]) {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
            } else {
                dp[i][j] = dp[i-1][j-1]
            }
        }
    }
    return dp[str1.length][str2.length]
}

let str1 = "heap"
let str2 = "pea"
console.log(editDistance(str1, str2))