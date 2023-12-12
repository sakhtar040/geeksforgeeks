class InfixToPostfix {
    constructor() {

    }

    getPrecedence(key) {
        switch (key) {
            case "^":
                return 3
            case "*":
            case "/":
                return 2
            case "+":
            case "-":
                return 1
            default:
                return -1
        }
    }

    toPostFix(str) {
        let stack = []
        let result = ""
        let length = str.length

        for(let i=0; i<length; i++) {
            let ch = str[i]
            if((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
                result += ch
            } else if (ch === "(") {
                stack.push("(")
            } else if(ch === ")") {
                while(stack[stack.length - 1] !== "(") {
                    result += stack[stack.length - 1]
                    stack.pop()
                }
                stack.pop()
            } else {
                while(stack.length && this.getPrecedence(ch) <= this.getPrecedence(stack[stack.length - 1])) {
                    result += stack[stack.length - 1]
                    stack.pop()
                }
                stack.push(ch)
            }
        }
        while(stack.length) {
            result += stack[stack.length - 1]
            stack.pop()
        }
        return result
    }
}

const stack = new InfixToPostfix()
console.log(stack.toPostFix("a+b*(c^d-e)^(f+g*h)-i"))