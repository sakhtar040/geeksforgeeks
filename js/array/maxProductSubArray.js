const maxProduct = (nums, n) => {
    let currMax = nums[0];
    let currMin = nums[0];
    let res = nums[0];

    for (let i = 1; i < n; i++) {
        const tempMax = currMax;

        currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
        currMin = Math.min(nums[i], nums[i] * currMin, nums[i] * tempMax);
        res = Math.max(res, currMax);
    }

    return res;
}

console.log(maxProduct([1, -2, -3, 0, 7, -8, -2], 7))

const max = (arr, n) => {
    let maxProduct = 1

    for(let i=0; i<n; i++) {
        let product = arr[i]
        for(let j=i+1; j<n; j++) {
            product = product * arr[j]
            if(maxProduct < product) {
                maxProduct = product
            }
        }
        if(maxProduct < product) {
            maxProduct = product
        }
    }
    return maxProduct
}

console.log(max([1, -2, -3, 0, 7, -8, -2], 7))