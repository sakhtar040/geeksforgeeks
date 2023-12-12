const partition = (input) => {
    const isPalindrome = (i, j) => {
        while(i < j) {
            if(input[i] !== input[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }

    const backtrack = (ind, ds) => {
        if(ind >= input.length) {
            return res.push([...ds])
        }

        for(let i=ind; i<input.length; i++) {
            if(isPalindrome(ind, i)) {
                ds.push(input.slice(ind, i+1))
                backtrack(i+1, ds)
                ds.pop()
            }
        }
    }

    let res = []
    backtrack(0, [])
    return res
}

console.log(partition("aab"))