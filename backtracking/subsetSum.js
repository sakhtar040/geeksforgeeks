class SubsetSum {
    constructor(arr1, target1, arr2, target2) {
        this.arr1 = arr1;
        this.target1 = target1;
        this.arr2 = arr2;
        this.target2 = target2;
    }

    sum1(memo) {
        if (memo[this.target1]) {
            return memo[this.target1]
        }

        if (this.target1 === 0) {
            return true
        }

        if (this.target1 < 0) {
            return false
        }

        for(let num of this.arr1) {
            let remTarget = this.target1 - num
            this.target1 = remTarget
            if(this.sum1(memo)) {
                memo[remTarget] = true
                return memo[remTarget]
            }
        }
        memo[this.target1] = false
        return false
    }
}

const subsetSum = new SubsetSum([3, 34, 4, 12, 5, 2], 9,  [3, 34, 4, 12, 5, 2], 30)
console.log(subsetSum.sum1({}))