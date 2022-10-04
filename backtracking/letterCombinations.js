const letterCombinations = function(digits) {
    const mapping = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    const backtrack = (i, str) => {
        if(str.length === digits.length) {
            return str.length ? res.push(str) : []
        }
        console.log("mapping:", mapping[digits[i]])
        for(let item of mapping[digits[i]]) {
            backtrack(i+1, str + item)
        }
    }

    let res = []
    backtrack(0, "")
    return res
};

console.log(letterCombinations("23"))