const KPartitionSubsetArray = (array, k) => {
    let totalSum = array.reduce((sum, num) => sum + num, 0)
    if(totalSum % k !== 0) {
        return false
    }
    let subsetSum = totalSum / k
    let taken = new Array(array.length).fill(false)
    let left = array.length

    const isPartitionPossible = (start, sum) => {
        if(left === 0) {
            return true
        }
        if(sum === 0) {
            return isPartitionPossible(0, subsetSum)
        }

        for(let i=start; i<array.length; i++) {
            if(array[i] > subsetSum) {
                return false
            }
            if(!taken[i] && array[i] <= sum) {
                taken[i] = true
                left--
                if(isPartitionPossible(i+1, sum - array[i])) {
                    return true
                }
                taken[i] = false
                left++
            }
        }
        return false
    }
    return isPartitionPossible(0, subsetSum)
}

canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((sum, num) => sum + num, 0)
    if(sum % k !== 0) {
        return false
    }

    let used = new Array(nums.length).fill(false)
    let n = sum/k
    let left = nums.length;

    const search = (start, target) => {
        if(left===0) {
            return true
        }
        if(target===0) {
            return search(0, n)
        }
        for(let i=start; i<nums.length; i++){
            if(nums[i]>n) {
                return false
            }
            if(!used[i] && nums[i]<=target){
                used[i]=true;
                left--;
                if(search(i+1, target-nums[i])){
                    return true
                }
                used[i]=false;
                left++;
            }
        }
        return false;
    }

    return search(0, n);
}

console.log(KPartitionSubsetArray([4,3,2,3,5,2,1], 4))
console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4))