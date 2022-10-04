class LongestPathMatrix {
    constructor(matrix) {
        this.matrix = matrix
        this.visited = new Map()
        this.paths = []
    }

    solve(row, col, path, n) {
        if(row === n-1 && col === n-1) {
            this.paths.push(path)
            return
        }

        //D
        if(row+1 < n && !this.visited.has(`${row+1}_${col}`) && this.matrix[row+1][col] === 1) {
            path += "D"
            this.visited.set(`${row+1}_${col}`, 1)
            this.solve(row+1, col, path, n)
            this.visited.delete(`${row+1}_${col}`)
        }

        //L
        if(col-1 >=0 && !this.visited.has(`${row}_${col-1}`) && this.matrix[row][col-1] === 1) {
            path += "L"
            this.visited.set(`${row}_${col-1}`, 1)
            this.solve(row, col-1, path, n)
            this.visited.delete(`${row}_${col-1}`)
        }

        //R
        if(col+1 < n && !this.visited.has(`${row}_${col+1}`) && this.matrix[row][col+1] === 1) {
            path += "R"
            this.visited.set(`${row}_${col+1}`, 1)
            this.solve(row, col+1, path, n)
            this.visited.delete(`${row}_${col+1}`)
        }

        //U
        if(row-1 >= 0 && !this.visited.has(`${row-1}_${col}`) && this.matrix[row-1][col] === 1) {
            path += "U"
            this.visited.set(`${row-1}_${col}`, 1)
            this.solve(row-1, col, path, n)
            this.visited.delete(`${row-1}_${col}`)
        }
    }

    findPath() {
        let path = ""
        let n = this.matrix.length
        if(this.matrix[0][0] === 1) {
            this.solve(0, 0, path, n)
        }
        return this.paths
    }
}

const matrix = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 0, 1, 1, 0, 1, 1, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
]
const longestPathMatrix = new LongestPathMatrix(matrix)
console.log(longestPathMatrix.findPath())