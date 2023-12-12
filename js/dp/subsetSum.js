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


let arr = [2, 3, 7, 8, 10]
let sum = 11
console.log(subsetSum(arr, sum, arr.length))