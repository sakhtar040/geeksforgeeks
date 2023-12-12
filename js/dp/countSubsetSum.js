const countSubsetSum = (arr, sum, n) => {
    if(n === 0 || sum === 0) {
        return 0
    }
    let mod = Number.MAX_VALUE
    let dp = new Array(n+1).fill(new Array(sum+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<sum+1; j++) {
            if(i === 0) {
                dp[i][j] = 0
            }
            if(j === 0) {
                dp[i][j] = 1
            }
        }
    }
    for(let i=1; i<n+1; i++) {
        for(let j=0; j<sum+1; j++) {
            if(arr[i-1] <= j) {
                dp[i][j] = (dp[i-1][j - arr[i-1]] + dp[i-1][j]) % mod
            } else {
                dp[i][j] = dp[i-1][j] % mod
            }
        }
    }
    return dp[n][sum] % mod
}

const arr = [2, 3, 5, 6, 8, 10]
const sum = 10
console.log(countSubsetSum(arr, sum, arr.length))