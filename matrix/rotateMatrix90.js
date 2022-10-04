const reverse = (arr) => {
    let maxLength = arr.length - 1;
    let halfLength = maxLength / 2;
    for(let i=0; i<halfLength; i++) {
        let temp = arr[i];
        arr[i] = arr[maxLength-i];
        arr[maxLength-i] = temp;
    }
    return arr
}

const rotateMatrix90Clockwise = (matrix) => {
    let n = matrix.length
        for(let i=0; i<n; i++) {
            for(let j=i; j<n; j++) {
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
        for(let i=0; i<n; i++) {
            reverse(matrix[i])
        }
    return matrix
}

console.log(rotateMatrix90Clockwise([[1,2,3], [4,5,6], [7,8,9]])) // clockwise

const rotateMatrix90Anti = (matrix) => {
    let n = matrix.length
    for(let i=0; i<n; i++) {
        reverse(matrix[i])
    }
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix
}

console.log(rotateMatrix90Anti([[1,2,3], [4,5,6], [7,8,9]])) // anti