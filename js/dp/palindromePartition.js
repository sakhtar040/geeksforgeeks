const isPalindrome = (str, i, j) => {
    let newStr = str.slice(i, j)
    for(let i=0; i<newStr.length/2; i++) {
        if(newStr[i] !== newStr[newStr.length - i - 1]) {
            return false
        }
    }
    return true
}

const palindromePartition = (str, i, j) => {
    if(i >= j) {
        return 0
    }

    if(isPalindrome(str, i, j)) {
        return 0
    }


    if(dp[i][j] !== -1) {
        return dp[i][j]
    }

    let sum = Number.MAX_VALUE
    for(let k=i; k<=j-1; k++) {
        let left, right
        if(dp[i][k] !== -1) {
            left = dp[i][k]
        } else {
            left = palindromePartition(str, i, k)
            dp[i][k] = left
        }

        if(dp[k+1][j] !== -1) {
            right = dp[k+1][j]
        } else {
            right = palindromePartition(str, k+1, j)
            dp[k+1][j] = right
        }

        let temp = left + right + 1
        if(temp < sum) {
            sum = temp
        }
    }
    dp[i][j] = sum
    return sum
}

let str = "nitik"
let dp = [...new Array(501)].map(() => new Array(501).fill(-1))
console.log(palindromePartition(str, 0, str.length))