class Number_of_Islands {
    numIslands = function(grid) {
        let visited = new Set()
        let count = 0
        for(let r=0; r<grid.length; r++) {
            for(let c=0; c<grid[0].length; c++) {
                if(this.explore(r, c, grid, visited)) {
                    count += 1
                }
            }
        }
        return count
    };

    explore = (r, c, grid, visited) => {
        let rowBound = 0 <= r && r < grid.length
        let colBound = 0 <= c && c < grid[0].length

        if(!rowBound || !colBound) {
            return false
        }

        if(grid[r][c] === "0") {
            return false
        }
        let pos = r + "_" + c
        if(visited.has(pos)) {
            return false
        }
        visited.add(pos)

        this.explore(r-1, c, grid, visited)
        this.explore(r+1, c, grid, visited)
        this.explore(r, c-1, grid, visited)
        this.explore(r, c+1, grid, visited)

        return true
    }
}

const numbers = new Number_of_Islands()
numbers.numIslands()

