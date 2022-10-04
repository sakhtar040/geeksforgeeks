const floodFill = (image, sr, sc, color) => {
    let dirX = [1, -1, 0, 0]
    let dirY = [0, 0, 1, -1]
    let rl = image.length
    let cl = image[0].length

    const isSafeMove = (row, col) => {
        return row >= 0 && col >= 0 && row < rl && col < cl
    }

    let queue = []
    queue.push([sr, sc])
    let img = image[sr][sc]
    if(img === color) {
        return image
    }

    while(queue.length) {
        let [r, c] = queue[0]
        queue.shift()
        image[r][c] = color
        for(let i=0; i<4; i++) {
            let row = r + dirX[i]
            let col = c + dirY[i]

            if(isSafeMove(row, col) && image[row][col] === img) {
                image[row][col] = color
                queue.push([row, col])
            }
        }
    }

    return image
}


let image = [
    [0,0,0],
    [0,1,0]
]
let sr = 1
let sc = 1
let color = 2
console.log(floodFill(image, sr, sc, color))