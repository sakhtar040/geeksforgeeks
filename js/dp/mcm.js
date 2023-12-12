const array = [40, 20, 30, 10, 30]
const memo = [...new Array(1001)].map(() => new Array(1001).fill(-1))

const mcmR = (arr, i, j) => {
    let sum = Number.MAX_VALUE
    if(i >= j) {
        return 0
    }
    for(let k=i; k<j; k++) {
        let tempSum = mcmR(arr, i, k) + mcmR(arr, k+1, j) + arr[i-1] * arr[k] * arr[j]
        if(tempSum < sum) {
            sum = tempSum
        }
    }
    return sum
}
console.time("start")
console.log(mcmR(array, 1, array.length-1))
console.timeEnd("start")

const mcmMemo = (arr, i, j, memo) => {
    if(i >= j) {
        return 0
    }
    if(memo[`${i}_${j}`]) {
        return memo[`${i}_${j}`]
    }
    let sum = Number.MAX_VALUE
    for(let k=i; k<j; k++) {
        let tempSum = mcmMemo(arr, i, k, memo) + mcmMemo(arr, k+1, j, memo) + arr[i-1] * arr[k] * arr[j]
        if(tempSum < sum) {
            sum = tempSum
        }
    }
    memo[`${i}_${j}`] = sum
    return memo[`${i}_${j}`]
}

console.time("startMemo")
console.log(mcmMemo(array, 1, array.length-1, {}))
console.timeEnd("startMemo")

const mcmMemoMatrix = (arr, i, j) => {
    if(i >= j) {
        return 0
    }
    if(memo[i][j] !== -1) {
        return memo[i][j]
    }
    let sum = Number.MAX_VALUE
    for(let k=i; k<j; k++) {
        let tempSum = mcmMemoMatrix(arr, i, k) + mcmMemoMatrix(arr, k+1, j) + arr[i-1] * arr[k] * arr[j]
        if(tempSum < sum) {
            sum = tempSum
        }
    }
    memo[i][j] = sum
    return memo[i][j]
}

console.time("startMemoMatrix")
console.log(mcmMemoMatrix(array, 1, array.length-1, memo))
console.timeEnd("startMemoMatrix")

