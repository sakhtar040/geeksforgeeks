//brute force
const subArraySum = (nums, sum, k) => {
    for(let i=0; i<nums.length; i++) {
        let res = 0
        for(let j=i; j<nums.length; j++) {
            res += nums[j]
            console.log("res", res);
            if(res === sum) {
                return [nums[i], nums[j]]
            }
        }
    }
}

//sliding window
const subArraySumSW = (arr, n, s) => {
    let i = 0
    let j = 0
    let currentSum = arr[0]
    if(currentSum === s) {
        return [ptr1+1, ptr2+1]
    }
    if (s === 0) {
        return [-1]
    }
        
    while(j < n - 1) {
        if(currentSum + arr[j+1] <= s) {
            currentSum += arr[j + 1]
            j++
        }else {
            currentSum -= arr[i]
            i++
        }
        
        if(currentSum === s) {
            return [i + 1, j + 1]
        }
    }
    
    return [-1]
}

console.log(subArraySum([1, 2, 6, 7, 5, 0], 12, 3))
console.log(subArraySumSW([1, 2, 6, 7, 5, 0], 6, 12));