const squareRoot = (num) => {
    let x = num
    let y = 1

    while(x > y) {
        x = Math.floor((x + y) / 2)
        y = Math.floor(num / x)
    }
    return Math.floor(x)
}

console.log(squareRoot(7))