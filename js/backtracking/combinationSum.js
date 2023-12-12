class CombinationSumClass {
    constructor(arr1, target1, arr2, target2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.target1 = target1;
        this.target2 = target2;
    }

    sum1() {
        let ans = []
        let temp = []
        let set = new Set([...this.arr1])
        this.arr1 = [...set]
        this.arr1.sort()

        const findNumbers = (ans, arr, target, ind, temp) => {
            if(target === 0) {
                ans.push([...temp])
                return
            }

            for(let i = ind; i<arr.length; i++) {
                let remTarget = target - arr[i]
                if(remTarget >= 0) {
                    temp.push(arr[i])
                    findNumbers(ans, arr, remTarget, i, temp)
                    temp.splice(temp.indexOf(arr[i]), 1)
                }
            }
        }

        findNumbers(ans, this.arr1, this.target1, 0, temp)

        return ans
    }

    sum2() {
        let ans = []
        let temp = []
        let set = new Set([...this.arr2])
        this.arr2 = [...set]
        this.arr2.sort()

        const findNumbers = (ans, arr, target, ind, temp) => {
            if(target === 0) {
                ans.push([...temp])
                return
            }

            for(let i = ind; i<arr.length; i++) {
                let remTarget = target - arr[i]
                if(remTarget >= 0) {
                    temp.push(arr[i])
                    findNumbers(ans, arr, remTarget, i, temp)
                    temp.splice(temp.indexOf(arr[i]), 1)
                }
            }
        }

        findNumbers(ans, this.arr1, this.target1, 0, temp)

        return ans
    }
}

const combSum = new CombinationSumClass([2, 3, 6, 7], 7, [2, 3, 6, 7], 7)
console.log(combSum.sum1())
console.log(combSum.sum2())

const combinationSum = (combinations, target) => {
    const sum = (ind, combinations, target, ans, ds) => {
        if(ind === combinations.length) {
            if(target === 0) {
                ans.push([...ds])
            }
            return
        }
        if(combinations[ind] <= target) {
            ds.push(combinations[ind])
            let remTarget = target - combinations[ind]
            sum(ind, combinations, remTarget, ans, ds)
            ds.splice(ds.indexOf(combinations[ind]), 1)
        }
        sum(ind + 1, combinations, target, ans, ds)
        return ans
    }
    let ans = []
    return sum(0, combinations, target, ans, [])
}

const combinationSum2 = (combinations, target) => {
    const sum = (ind, combinations, target, ans, ds) => {
        if(target === 0) {
            ans.push([...ds])
            return
        }
        for(let i = ind; i < combinations.length; i++) {
            if(i > ind && combinations[i] === combinations[i - 1]) {
                continue
            }
            if(combinations[i] > target) {
                break
            }
            ds.push(combinations[i])
            sum(i + 1, combinations, target - combinations[i], ans, ds)
            ds.splice(ds.indexOf(combinations[i]), 1)
        }
        if(combinations[ind] <= target) {
            ds.push(combinations[ind])
            let remTarget = target - combinations[ind]
            sum(ind, combinations, remTarget, ans, ds)
            ds.splice(ds.indexOf(combinations[ind]), 1)
        }
    }
    let ans = []
    combinations.sort((a, b) => a-b)
    sum(0, combinations, target, ans, [])
    return ans
}

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum2([2,3,6,7], 7))