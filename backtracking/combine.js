const solve = (n, k, ds, solutions, i) => {
    if(ds.length === k) {
        return solutions.push([...ds])
    }

    for(let j=i; j<=n; j++) {
        ds.push(j)
        solve(n, k, ds, solutions, j+1)
        ds.pop()
    }
}

const combine = (n, k) => {
    let solutions = []

    solve(n, k, [], solutions, 1)
    return solutions
}

console.log(combine(4, 2))