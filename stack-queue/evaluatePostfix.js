class EvaluatePostfix {
    constructor() {}

    evaluate(str) {
        let stack = []
        let length = str.length

        for(let i=0; i<length; i++) {
            let item = str[i]
            if(item >= "0" && item <= "9") {
                stack.push(parseInt(item))
            } else {
                let b = stack.pop()
                let a = stack.pop()
                switch(item) {
                    case "*":
                        stack.push(a * b)
                        break

                    case "/":
                        stack.push(a / b)
                        break

                    case "+":
                        stack.push(a + b)
                        break

                    case "-":
                        stack.push(a - b)
                        break
                }
            }
        }
        return stack[0]
    }
}

const stack = new EvaluatePostfix()
console.log(stack.evaluate("231*+9-"))