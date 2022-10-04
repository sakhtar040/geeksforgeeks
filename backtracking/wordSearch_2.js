class WordSearch {
    constructor(board) {
        this.board = board;
        this.visited = new Set()
    }

    dfs(row, col, index, word) {
        if(index === word.length) {
            return true
        }
        if(
            row < 0 || row >= this.board.length ||
            col < 0 || col >= this.board[0].length ||
            word[index] !== this.board[row][col] ||
            this.visited.has(`${row}_${col}`)
        ) {
            return false
        }

        this.visited.add(`${row}_${col}`)

        let res = this.dfs(row+1, col, index+1, word) ||
            this.dfs(row-1, col, index+1, word) ||
            this.dfs(row, col+1, index+1, word) ||
            this.dfs(row, col-1, index+1, word)
        this.visited.delete(`${row}_${col}`)
        return res
    }

    search(words) {
        let row = this.board.length
        let col = this.board[0].length
        let output = []
        for(let word of words) {
            for(let r=0; r<row; r++) {
                for(let c=0; c<col; c++) {
                    if(this.dfs(r, c, 0, word)) {
                        output.push(word)
                    }
                }
            }
        }
        return output
    }
}

const board = [["o","a","a","n"], ["e","t","a","e"], ["i","h","k","r"], ["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]
const wordSearch = new WordSearch(board)
console.log(wordSearch.search(words))