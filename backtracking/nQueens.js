class NQueens {
    solve(solutions, n, board = [], r = 0) {
        if (r === n) {
            solutions.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
                board.push(c);
                this.solve(solutions, n, board, r + 1);
                board.pop();
            }
        }
    }

    solveNQueens(n) {
        let solutions = []
        this.solve(solutions, n)
        return solutions
    }

    solveNQueens1(n) {
        //create empty chess board
        //String in javascript is immutable, so here I use 2D array for chess board
        let chessBoard = new Array(n);
        for(let i = 0; i < n; i++) {
            chessBoard[i] = new Array(n).fill(".");
        }
        console.log(chessBoard)

        let result = [];

        const isValidQueen = function(row, col) {
            //check for spots above on this column
            for(let i = 0; i < row; i++) {
                if(chessBoard[i][col] === "Q") return false;
            }
            //check for up left
            for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                if(chessBoard[i][j] === "Q") return false;
            }
            //check for up right
            for(let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
                if(chessBoard[i][j] === "Q") return false;
            }
            return true;
        }

        const backtrack = function(row) {
            if(row === n) {
                result.push([...chessBoard].map(row => row.join('')));
                return;
            }
            for(let col = 0; col < n; col++) {
                if(isValidQueen(row, col)) {
                    chessBoard[row][col] = "Q";
                    backtrack(row + 1);
                    chessBoard[row][col] = ".";
                }
            }
        }
        backtrack(0);
        return result;
    }
}

const nQueens = new NQueens()
console.log(nQueens.solveNQueens(4))
console.log(nQueens.solveNQueens1(4))