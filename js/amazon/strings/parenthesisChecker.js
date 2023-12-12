const parenthesisChecker = (str) => {
    let stack = []

    for(let i=0; i<str.length; i++) {
        if(str[i] === "[") {
            stack.push("]")
            continue
        }

        if(str[i] === "{") {
            stack.push("}")
            continue
        }

        if(str[i] === "(") {
            stack.push(")")
            continue
        }

        if(stack.length === 0 || stack[stack.length - 1] !== str[i]) {
            return false
        }
        stack.pop();
    }

    return stack.length === 0
}

console.log(parenthesisChecker("(]"))