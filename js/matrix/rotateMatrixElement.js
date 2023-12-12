const rotateMatrixElement = (matrix) => {
    let row = matrix.length
    let col = matrix[0].length
    let prev;
    let curr;

    let r = 0
    let c = 0

    while(r < row && c < col) {
        if((r + 1) === row || (c + 1) === col) {
            break
        }

        prev = matrix[r + 1][c]

        for(let i=c; i<col; i++) {
            curr = matrix[r][i]
            matrix[r][i] = prev
            prev = curr
        }
        r++

        for(let i=r; i<row; i++) {
            curr = matrix[i][col-1]
            matrix[i][col-1] = prev
            prev = curr
        }
        col--

        if (r < row)
        {
            for(let i = col - 1; i >= c; i--)
            {
                curr = matrix[row - 1][i];
                matrix[row - 1][i] = prev;
                prev = curr;
            }
        }
        row--;

        if(c < col) {
            for(let i=row-1; i>=r; i--) {
                curr = matrix[i][c]
                matrix[i][c] = prev
                prev = curr
            }
        }
        c++
    }

    return matrix
}

console.log(rotateMatrixElement([[1,2,3], [4,5,6], [7,8,9]]))