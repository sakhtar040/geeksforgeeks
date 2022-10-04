const Kth_Permutation = (array, k) => {
    let solutions = []
    let visited = new Array(array.length).fill(false)
    const backtrack = (ds) => {
        if(ds.length === array.length) {
            return solutions.push([...ds])
        }

        for(let i=0; i<array.length; i++) {
            if(visited[i] || (i > 0 && array[i] === array[i-1] && !visited[i-1])) {
                continue
            }
            visited[i] = true
            ds.push(array[i])
            backtrack(ds)
            visited[i] = false
            ds.pop()
        }
    }

    backtrack([])
    return solutions[k-1].join("")
}

let n = 3
let k = 1
let array = []
for(let i=1; i<=n; i++) {
    array.push(i)
}
console.log(Kth_Permutation(array, k))

const getPermutation = function(n, k) {
    const num = Array.from({length:n}, (_, i) => i+1);
    const factorial = [1];
    const result = [];

    for(let i = 1; i <= num.length; i++) {
        factorial.push(factorial[i-1] * num[i-1]);
    }

    while(num.length) {
        const idx = Math.ceil(k / factorial[--n]) - 1;
        result.push(num.splice(idx, 1));
        k = k % factorial[n] || factorial[n]
    }
    return result.join('');
};

console.log(getPermutation(n, k))