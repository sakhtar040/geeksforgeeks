class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        let stack = []
        for(let i=0; i<x.length; i++) {
            if(x[i] == "(") {
                stack.push(")")
                continue
            }
            if(x[i] == "{") {
                stack.push("}")
                continue
            }
            if(x[i] == "[") {
                stack.push("]")
                continue
            }
            if(stack.length === 0 || stack[stack.length - 1] != x[i]) {
                return false
            }
            stack.pop()
        }
        return stack.length === 0
    }
}