class ValidParentheses {
    constructor() {

    }

    isValid(inputString) {
        let stack = [-1]
        //let stack2 = []
        let output = 0
        for(let i=0; i<inputString.length; i++) {
            let str = inputString[i]
            if(str === "(") {
                stack.push(i)
            } else {
                if(stack.length) {
                    stack.pop()
                }
                if(stack.length) {
                    output = Math.max(output, i - stack[stack.length - 1])
                } else {
                    stack.push(i)
                }
            }
        }
        console.log(output)
        console.log("-----------")
    }
}

const validParentheses = new ValidParentheses()
validParentheses.isValid("()")
validParentheses.isValid("(())")
validParentheses.isValid("(())")
validParentheses.isValid("()(())(")
validParentheses.isValid(")()())")
validParentheses.isValid("()(()))))")
validParentheses.isValid("))()(()")
validParentheses.isValid("(((()")
validParentheses.isValid(")(()((((()))))))()()(()(()(())()()()))())(")
validParentheses.isValid("((()))")
