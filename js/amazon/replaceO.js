const replace = (num) => {
    let nums = ""+num
    nums = nums.split("")
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === "0") {
            nums[i] = "5"
        }
    }
    nums = nums.join("")
    return +nums
}

console.log(replace(1004));