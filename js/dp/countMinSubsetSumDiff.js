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

const countMinSubsetSumDiff = (arr, diff) => {
    let sum = 0
    let n = arr.length
    for(let i=0; i<n; i++) {
        sum += arr[i]
    }
    let sum1 = (diff + sum) / 2;
    return countSubsetSum(arr, sum1, n)
}

const arr = [1, 1, 2, 3]
const diff = 1
console.log(countMinSubsetSumDiff(arr, diff))