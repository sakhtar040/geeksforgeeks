const extractMaximum = (str) => {
    let nStr = str
    let num = ""
    let nums = []
    for(let i=0; i<str.length; i++) {
        if(nStr[i].match(/[A-Za-z]/)) {
            if(num.length) {
                nums.push(num)
            }
            num = ""
        } else {
            console.log(nStr[i])
            num += nStr[i]
        }
    }
    if(nums.length === 0 || num.length) {
        nums.push(num)
    }
    console.log(nums)
    nums.sort((a, b) => a-b)
    console.log(nums)
    return nums[nums.length-1] === "" ? -1 : Number(nums[nums.length-1])
}

console.log(extractMaximum("jui9lhr0ssbu1klounxfw8ztwsuylrp6lwaxpsrbepkumd6othfuqnfm905"))