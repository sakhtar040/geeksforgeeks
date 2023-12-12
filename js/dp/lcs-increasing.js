//Increasing Subsequence
const lcs = (nums) => {
    let n = nums.length
    let dp = new Array(n+1).fill(1)
    for(let i=0; i<n; i++) {
        for(let j=0; j<i; j++) {
            if(nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
            }
        }
    }
    return dp.sort((a, b) => a-b)[dp.length-1]
}

let nums = [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]
console.log(lcs(nums))