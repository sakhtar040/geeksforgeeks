const eggDropping = (n, k) => {
    const M = 300; // big enough number
    const dp = Array.from({length: M+1}, () => Array(n+1).fill(0));

    for(let i = 1; i <= M; i++) {
        for(let j = 1; j <= n; j++) {
            dp[i][j] = 1 + dp[i-1][j] + dp[i-1][j-1];
            if(dp[i][j] >= k) return i;
        }
    }
};

console.log(eggDropping(4, 5000))