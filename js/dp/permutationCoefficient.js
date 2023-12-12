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

const permutationCoefficient = (n, r, memo = {}) => {
    let n_fac = factorial(n)
    let n_r_fac = factorial(n-r)
    return Math.floor(n_fac/n_r_fac)
}

//P(n, k) = P(n-1, k) + k* P(n-1, k-1)
console.log(permutationCoefficient(10, 3))

const _permutationCoefficient = (n, k) => {
    let P = new Array(n + 2);
    for(let i = 0; i < n + 2; i++) {
        P[i] = new Array(k + 2);
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            if (j === 0) {
                P[i][j] = 1;
            } else {
                P[i][j] = P[i - 1][j] + (j * P[i - 1][j - 1]);
            }
            P[i][j + 1] = 0;
        }
    }
    return P[n][k];
}

console.log(_permutationCoefficient(10, 3))