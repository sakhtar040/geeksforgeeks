//recursive
const knapsackR = (wt, val, W, n) => {
    if(W === 0 || n === 0) {
        return 0
    }

    if(W < wt[n-1]) {
        return knapsackR(wt, val, W, n-1)
    } else if(W >= wt[n-1]) {
        return Math.max(val[n-1] + knapsackR(wt, val, W - wt[n-1], n-1), knapsackR(wt, val, W, n-1))
    }
}

//memo (bottoms-up)
const knapsackMemo = (wt, val, W, n, memo = {}) => {
    if(W === 0 || n === 0) {
        return 0
    }

    if(memo[`${n}_${W}`]) {
        return memo[`${n}_${W}`]
    }

    if(W < wt[n-1]) {
        memo[`${n}_${W}`] = knapsackMemo(wt, val, W, n-1, memo)
        return memo[`${n}_${W}`]
    } else if(W >= wt[n-1]) {
        memo[`${n}_${W}`] = Math.max(val[n-1] + knapsackMemo(wt, val, W - wt[n-1], n-1, memo), knapsackMemo(wt, val, W, n-1, memo))
        return memo[`${n}_${W}`]
    }
}

//top-down
const knapsackTab = (wt, val, W, n) => {
    if(W === 0 || n === 0) {
        return 0
    }
    let dp = new Array(n+1).fill(new Array(W+1))
    for(let i=0; i<n+1; i++) {
        for(let j=0; j<W+1; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = 0
            }
        }
    }
    for(let i=1; i<n+1; i++) {
        for(let j=1; j<W+1; j++) {
            dp[i][j] = wt[i-1] <= j ? Math.max(val[i-1] + dp[i-1][j - wt[i-1]], dp[i-1][j]) : dp[i-1][j]
        }
    }
    return dp[n][W]
}

const wt = [4, 5, 1]
const value = [1, 2, 3]
const W = 4
const n = 3
console.log(knapsackR(wt, value, W, n))
console.log(knapsackMemo(wt, value, W, n))
console.log(knapsackTab(wt, value, W, n))