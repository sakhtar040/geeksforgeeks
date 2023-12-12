const knightsTour = (n) => {
    let board = new Array(n)
    for(let i=0; i<n; i++) {
        board[i] = new Array(n).fill(-1)
    }

    board[0][0] = 0

    let xMove = [2, 1, -1, -2, -2, -1, 1, 2]
    let yMove = [1, 2, 2, 1, -1, -2, -2, -1]

    const isSafeMove = (row, col, board) => {
        if(row >= 0 && col >= 0 && row < n && col < n && board[row][col] === -1) {
            return true
        }
        return false
    }

    const tour = (board, row, col, moves, xMove, yMove) => {
        if(moves === n * n) {
            return true
        }

        for(let i=0; i<n; i++ ) {
            let nextX = row + xMove[i]
            let nextY = col + yMove[i]
            if(isSafeMove(nextX, nextY, board)) {
                board[nextX][nextY] = moves
                if(tour(board, nextX, nextY, moves + 1, xMove, yMove)) {
                    return true
                } else {
                    board[nextX][nextY] = -1
                }
            }
        }

        return false
    }
    return tour(board, 0, 0, 1, xMove, yMove)
}

let n = 8
console.log(knightsTour(n))