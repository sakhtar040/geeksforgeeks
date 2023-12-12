const lps = (s) => {
    let n = s.length

    let dp = [...new Array(n+1)].map(()=>Array(n + 1).fill(false))

    let lps = ''

    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // base case for two characters
    for(let i = 0; i < n; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i+1] = true;
        }
        if(dp[i][i+1]) {
            lps = s.substring(i, i + 2);
        }
    }

    // expand to three or more characters
    for(let i = n - 1; i >= 0; i--) {
        for(let j = i + 2; j < n; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) {
                lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
            }
        }
    }

    return lps;
}

console.log(lps("agbcba"))