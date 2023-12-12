//subsequence
const lcsR = (str1, str2, n, m) => {
    if(n === 0 || m === 0) {
        return 0
    }

    if(str1[n-1] === str2[m-1]) {
        return 1 + lcsR(str1, str2, n-1, m-1)
    } else {
        return Math.max(lcsR(str1, str2, n, m-1), lcsR(str1, str2, n-1, m))
    }
}

console.log(lcsR("", "abcd", 0, 4))

const lcsM = (str1, str2, n, m, memo = {}) => {
    if(n === 0 || m === 0) {
        return 0
    }

    if(memo[`${n}_${m}`]) {
        return memo[`${n}_${m}`]
    }

    if(str1[n-1] === str2[m-1]) {
        memo[`${n}_${m}`] = 1 + lcsM(str1, str2, n-1, m-1, memo)
        return memo[`${n}_${m}`]
    } else {
        memo[`${n}_${m}`] = Math.max(lcsM(str1, str2, n, m-1, memo), lcsM(str1, str2, n-1, m, memo))
        return memo[`${n}_${m}`]
    }
}

console.log(lcsM("abcf", "abcd", 4, 4))

const lcsT = (str1, str2, n, m) => {
    if(n === 0 || m === 0) {
        return 0
    }

    let dp = new Array(n+1).fill(new Array(m+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<m+1; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            } else if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    console.log(dp)
    return dp[n][m] === n
}

console.log(lcsT("ab", "baab", 2, 4))

const lcsTPrint = (str1, str2) => {
    let n = str1.length
    let m = str2.length
    if(n === 0 || m === 0) {
        return 0
    }

    let dp = new Array(n+1).fill(new Array(m+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<m+1; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            } else if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    let i=n
    let j=m
    let res = ""
    while(i > 0 && j > 0) {
        if(str1[i-1] === str2[j-1]) {
            res += str1[i-1]
            i--
            j--
        } else {
            if(dp[i-1][j] > dp[i][j-1]) {
                i--
            } else {
                j--
            }
        }
    }

    return res.split("").reverse().join("")
}

console.log(lcsTPrint("acbcf", "abcdaf"))