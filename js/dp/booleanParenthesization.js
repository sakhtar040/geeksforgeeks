const booleanParenthesization = (str, i, j, isTrue) => {
    if(i >= j) {
        return false
    }

    if(i === j) {
        return true
    }

    let ans = 0

    for(let k=i+1; k<=j-1; k=k+2) {
        if(str[k] === "&") {
            if(isTrue) {
                ans = ans + booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, true)
            } else {
                ans = ans + booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, true) +
                    booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, false) +
                    booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, false)
            }
        } else if(str[k] === "|") {
            if(isTrue) {
                ans = ans + booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, true) +
                    booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, true) +
                    booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, false)
            } else {
                ans = ans + booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, false)
            }
        } else {
            if(isTrue) {
                ans = ans + booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, true) +
                    booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, false)
            } else {
                ans = ans + booleanParenthesization(str, i, k-1, true) * booleanParenthesization(str, k+1, j, true) +
                    booleanParenthesization(str, i, k-1, false) * booleanParenthesization(str, k+1, j, false)
            }
        }
    }
    return ans
}

let str = "T|T&F^T"
console.log(booleanParenthesization(str, 0, str.length-1, true))