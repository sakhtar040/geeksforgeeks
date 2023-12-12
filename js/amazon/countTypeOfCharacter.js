const count = (str) => {
    let arr = new Array(4).fill(0)
    for(let i=0; i<str.length; i++) {
        if(str[i].match(/[A-Z]/)) {
            arr[0]++
        } else if(str[i].match(/[a-z]/)) {
            arr[1]++
        } else if(str[i].match(/[0-9]/)) {
            arr[2]++
        } else {
            arr[3]++
        }
    }
    return arr
}

console.log(count("#GeeKs01fOr@gEEks07"))