/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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
    if(characterMap["["] !== characterMap["]"]) {
        return false
    }

    return true
};

console.log(isValid(""))