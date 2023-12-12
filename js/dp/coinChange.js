const coinChange = (coins, sum , n) => { //all
    if(sum === 0 || n === 0) {
        return 0
    }

    let dp = new Array(n+1).fill(new Array(sum + 1))
    for(let i=0; i<=n; i++) {
        for(let j=0; j<=sum; j++) {
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
            dp[i][j] = coins[i-1] <= j ? dp[i][j - coins[i-1]] + dp[i-1][j] : dp[i-1][j]
        }
    }
    return dp[n][sum]
}

const _coinChange = (coins, amount) => { //min
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

const coins = [1,2,3]
const sum = 5
console.log(coinChange(coins, sum, coins.length))
console.log(_coinChange(coins, sum, coins.length))