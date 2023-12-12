const strstr = (str, x) => {
    let ind = -1
    for(let i=0; i<str.length; i++) {
        if(str[i] === x[0]) {
            ind = i
            for(let j=0; j<x.length; j++) {
                if(str[i+j] !== x[j]) {
                    ind = -1
                }
            }
            if(ind !== -1) {
                return ind
            }
        }
    }
    return ind
}

console.log(strstr("GeeksForGeeks", "For"))