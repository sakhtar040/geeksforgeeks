function stepsByKnight(n, pos, targetPos) {
    let board = new Array(n+1)
    for(let i=1; i<=n; i++) {
        board[i] = new Array(n+1).fill(false)
    }

    let xMove = [2, 1, -1, -2, -2, -1, 1, 2]
    let yMove = [1, 2, 2, 1, -1, -2, -2, -1]

    const isSafeMove = (row, col) => {
        return row >= 1 && col >= 1 && row <= n && col <= n
    }

    let queue = []
    queue.push(new cell(pos[0], pos[1], 0))
    board[pos[0]][pos[1]] = true
    while(queue.length) {
        let temp = queue.shift()
        if(targetPos[0] === temp.row && targetPos[1] === temp.col) {
            return temp.steps
        }

        for(let i=0; i<8; i++) {
            let row = temp.row + xMove[i]
            let col = temp.col + yMove[i]
            if(isSafeMove(row, col) && !board[row][col]) {
                board[row][col] = true
                queue.push(new cell(row, col, temp.steps+1))
            }
        }
    }
    return Number.MAX_VALUE
}

function cell(row, col, steps) {
    return {row, col, steps}
}

console.log(stepsByKnight(30, [1, 1], [30, 30]))