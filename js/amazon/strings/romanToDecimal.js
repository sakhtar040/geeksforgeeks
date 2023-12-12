const romanToDecimal = (str) => {
    let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0
    for(let i=0; i<str.length; i++) {
        if(map[str[i]] < map[str[i+1]]) {
            sum += map[str[i+1]] - map[str[i]]
            i++
            continue
        }
        sum += map[str[i]]
    }
    return sum
}

console.log(romanToDecimal("LV"))