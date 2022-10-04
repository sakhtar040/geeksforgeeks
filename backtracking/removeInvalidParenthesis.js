const isValid = (s) => {
    let sampleChars = "(){}[]"
    let characterMap = {}
    for(let i=0; i<sampleChars.length; i++) {
        characterMap[sampleChars[i]] = 0
    }
    let stack = []
    let valid = true

    const checkAndPush = (ch) => {
        let valid = true
        if(stack.length === 0) {
            stack.push(ch)
        } else {
            if(["(", "{", "["].includes(ch)) {
                if(stack[stack.length - 1] === ")" && ch === "(") {
                    return false
                }

                if(stack[stack.length - 1] === "}" && ch === "{") {
                    return false
                }

                if(stack[stack.length - 1] === "]" && ch === "[") {
                    return false
                }
                stack.push(ch)
            } else {
                if(stack[stack.length - 1] === "(" && ch === ")") {
                    stack.length = stack.length - 1
                    return true
                } else {
                    valid = false
                }

                if(stack[stack.length - 1] === "{" && ch === "}") {
                    stack.length = stack.length - 1
                    return true
                } else {
                    valid = false
                }

                if(stack[stack.length - 1] === "[" && ch === "]") {
                    stack.length = stack.length - 1
                    return true
                } else {
                    valid = false
                }
            }
        }
        return valid
    }

    for(let i=0; i<s.length; i++) {
        switch(s[i]) {
            case "(":
                characterMap["("] = characterMap["("] + 1
                break;
            case ")":
                characterMap[")"] = characterMap[")"] + 1
                break;
            case "{":
                characterMap["{"] = characterMap["{"] + 1
                break;
            case "}":
                characterMap["}"] = characterMap["}"] + 1
                break;
            case "[":
                characterMap["["] = characterMap["["] + 1
                break;
            case "]":
                characterMap["]"] = characterMap["]"] + 1
                break;
        }
        valid = checkAndPush(s[i])
        if(!valid) {
            return false
        }
    }

    if(characterMap["("] !== characterMap[")"]) {
        return false
    }
    if(characterMap["{"] !== characterMap["}"]) {
        return false
    }
    return characterMap["["] === characterMap["]"];
}

const splice = (index, str) => {
    return str.slice(0, index) + str.slice(index + 1)
}

const isValidParenthesis = (index, str) => {
    if(str[index] !== "(" || str[index] !== ")") {
        return true
    }
    let newStr = splice(index, str)
    return isValid(newStr);

}

const remove = (index, str, ds, solutions) => {
    if(index === str.length-2 && !solutions.includes(...ds)) {
        return solutions.push(...ds)
    }

    for(let i = index; i < str.length; i++) {
        if(isValidParenthesis(i, str)) {
            if(str[i] === "(" || str[i] === ")") {
                !ds.includes(splice(i, str)) && ds.push(splice(i, str))
                remove(index + 1, str, ds, solutions)
                !ds.includes(splice(i, str)) && ds.pop()
            }
        }
    }
}

const removeInvalidParentheses = (input) => {
    const solutions = []
    remove(0, input, [], solutions)
    return solutions.length === 0 ? [""] : solutions
}

console.log(removeInvalidParentheses("(a)())()"))