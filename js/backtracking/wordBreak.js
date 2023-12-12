const wordBreak = (str, dict) => {
    if (dict == null || dict.length === 0) return false;
    let dp = new Array(str.length + 1).fill(false)
    dp[0] = true
    let set = new Set(dict)

    for(let end=1; end<=str.length; end++) {
        for(let start=0; start<end; start++) {
            let w = str.slice(start, end)
            if (dp[start] && set.has(w)) {
                dp[end] = true
                break
            }
        }
    }
    return dp[str.length]
}

let str = "applepenapple"
let dict = ["apple","pen"]
console.log(wordBreak(str, dict))