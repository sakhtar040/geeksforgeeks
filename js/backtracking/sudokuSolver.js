class SudokuSolver {
    solveSudoku(board, n) {
        const isValidMove = (row, col, val, board) => {
            //checking row
            for(let i=0; i<=8; i++) {
                if(board[row][i] == val) {
                    return false
                }
            }

            //checking col
            for(let i=0; i<=8; i++) {
                if(board[i][col] == val) {
                    return false
                }
            }

            //checking 3*3 grid
            let startRow = row - row % 3
            let startCol = col - col % 3
            for(let i=0; i<3; i++) {
                for(let j=0; j<3; j++) {
                    if(board[i+startRow][j+startCol] == val) {
                        return false
                    }
                }
            }
            return true
        }

        const backtrack = (board) => {
            for(let i=0; i<n; i++) {
                for(let j=0; j<n; j++) {
                    if(board[i][j] === ".") {
                        for(let k=1; k<=9; k++) {
                            if(isValidMove(i, j, k, board)) {
                                board[i][j] = ""+k
                                if(backtrack(board)) {
                                    return true
                                } else {
                                    board[i][j] = "."
                                }
                            }
                        }
                        return false
                    }
                }
            }
            return true
        }

        backtrack(board)
        return board
    }
}

const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
const sudokuSolver = new SudokuSolver()
console.log(sudokuSolver.solveSudoku(board, 9))