const searchElementInMatrix = (matrix, target) => {
    let row = matrix.length
    let col = matrix[0].length

    let r = 0
    let c = col-1
    while(r < row && c >= 0) {
        if(r < 0 || c < 0) {
            return false
        }
        if(matrix[r][c] === target) {
            return {"row": r, "col": c}
        } else if(matrix[r][c] < target) {
            r++
        } else {
            c--
        }
    }

    return false
}

console.log(searchElementInMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 11))

const search = (matrix, target) => {
    let rowLength = matrix.length-1
    let start = 0
    let end = matrix[0].length
    for(let i=0; i<=rowLength; i++) {
        while(start < end) {
            let mid = Math.floor((start + end) / 2)
            if(matrix[i][mid] === target) {
                return {"row": i, "col": mid}
            } else if(matrix[i][mid] > target) {
                end--
            } else {
                start++
            }
        }
        start = 0
        end = matrix[i].length
    }
    return false
}

console.log(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 60))