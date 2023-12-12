const factorial = (num, memo = {}) => {
    if(num <= 1) {
        return 1
    }
    if(memo[num]) {
        return memo[num]
    }

    memo[num] = num * factorial(num - 1, memo)
    return memo[num]
}

const binomialCoefficient = (n, r) => {
    let n_fac = factorial(n)
    console.log(n_fac)
    let r_fac = factorial(r)
    let n_r_fac = factorial(n-r)
    console.log(n_r_fac)
    return Math.floor(n_fac/(r_fac * (n_r_fac)))
}

console.log(binomialCoefficient(384, 487))

var uniquePaths = function(m, n) {
    const res = [];
    for (let i = 0; i < n; i++) res.push([...new Array(m).fill(1)]); // initialize list
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            res[i][j] = res[i-1][j] + res[i][j-1];
        }
    }
    return res[n-1][m-1];
};