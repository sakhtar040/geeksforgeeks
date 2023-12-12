const matrixPath = (matrix) => {
    let solutions = []
    let row = matrix.length
    let col = matrix[0].length
    let path = new Array(row+col-1)

    const findPath = (path, r, c, index) => {
        path[index] = matrix[r][c]
        if(r === row-1) {
            for(let i=c+1; i<col; i++) {
                path[index + i - c] = matrix[r][i]
            }
            return solutions.push([...path])
        }

        if(c === col-1) {
            for(let i=r+1; i<row; i++) {
                path[index + i - r] = matrix[i][c]
            }
            return solutions.push([...path])
        }
        findPath(path, r+1, c, index+1)
        findPath(path, r, c+1, index+1)
    }

    findPath(path, 0, 0, 0)
    return solutions
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
console.log(matrixPath(matrix))