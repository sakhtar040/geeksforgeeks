const commonElementInAllRows = (matrix) => {
    let obj = {}
    for(let i=0; i<matrix.length; i++) {
        for(let j = 0; j<matrix[i].length; j++) {
            if(obj[matrix[i][j]]) {
                ++obj[matrix[i][j]]
            } else {
                obj[matrix[i][j]] = 1
            }
        }
    }
    return Object.keys(obj).filter(item => obj[item] > 1)
}

console.log(commonElementInAllRows([[1,2,3], [2,3,4], [2,3,5]]))