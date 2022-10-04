const uniqueTripletSum = (nums, n, X) => {
    if(n === 0) {
        return []
    } else if(n === 1) {
        return []
    } else {
        nums.sort((a, b) => a - b)
        let triplets = {}
        for(let i=0; i<n; i++) {
            let remTarget = X - nums[i]
            let j = i+1
            let k = n-1
            while(j < k) {
                if((nums[j] + nums[k]) > remTarget) {
                    k--
                } else if ((nums[j] + nums[k]) < remTarget) {
                    j++
                } else {
                    triplets[`${nums[i]}_${nums[j]}_${nums[k]}`] = [nums[i], nums[j], nums[k]]
                    j++
                    k--
                }
            }
        }
        return Object.keys(triplets).map(item => triplets[item])
    }
}

console.log(uniqueTripletSum([-1,0,1,2,-1,-4], 6, 0))