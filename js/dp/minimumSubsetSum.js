const minimumSubsetSumDiff = (arr, n) => {
    let sum = 0
    for(let i=0; i<n; i++) {
        sum += arr[i]
    }
    let dp = new Array(n+1).fill(new Array(sum+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<sum+1; j++) {
            if(i === 0) {
                dp[i][j] = false
            }
            if(j === 0) {
                dp[i][j] = true
            }
        }
    }
    for(let i=1; i<n+1; i++) {
        for(let j=1; j<sum+1; j++) {
            dp[i][j] = arr[i-1] <= j ? dp[i-1][j - arr[i-1]] || dp[i-1][j] : dp[i-1][j]
        }
    }
    let diff = Number.MAX_VALUE
    for(let j=0; j<=sum/2; j++) {
        let first = j
        let sec = sum - j
        if(dp[n][j] && diff > Math.abs(first - sec)) {
            diff = Math.abs(first - sec)
        }
    }
    return diff
}

const arr = [1, 4]
console.log(minimumSubsetSumDiff(arr, arr.length))