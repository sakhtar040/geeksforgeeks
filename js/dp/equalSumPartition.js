const subsetSum = (arr, sum, n) => {
    if(sum === 0 || n === 0) {
        return true
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
    return dp[n][sum]
}

const equalSumPartition = (arr, n) => {
    let sum = 0
    for(let i=0; i<n; i++) {
        sum += arr[i]
    }
    if(sum % 2 !== 0) {
        return false
    }
    return subsetSum(arr, sum/2, n)
}

let arr = [1, 5, 11, 5]
console.log(equalSumPartition(arr, arr.length))