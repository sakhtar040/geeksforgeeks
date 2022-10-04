const islandPerimeter = (grid) => {
    let rowLength = grid.length
    let colLength = grid[0].length
    let perimeter = 0
    let visit = new Set()

    const dfs = (row, col) => {
        if(row >= rowLength || col >= colLength || row < 0 || col < 0 || grid[row][col] === 0) {
            return 1
        }
        if(visit.has((`${row}_${col}`))) {
            return 0
        }

        visit.add((`${row}_${col}`))
        perimeter = dfs(row, col+1)
        perimeter += dfs(row+1, col)
        perimeter += dfs(row, col-1)
        perimeter += dfs(row-1, col)
        return perimeter
    }

    for(let i=0; i<rowLength; i++){
        for(let j=0; j<colLength; j++) {
            if(grid[i][j]) {
                return dfs(i, j)
            }
        }
    }
}

let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
console.log(islandPerimeter(grid))