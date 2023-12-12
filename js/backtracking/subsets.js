var subsetsWithDup = function(nums) {
    const allSum = (ind, nums, ans, ds) => {
        ans.push([...ds])
        for(let i = ind; i<nums.length; i++) {
            if(i != ind && nums[i] == nums[i-1]) {
                continue
            }
            ds.push(nums[i])
            allSum(i + 1, nums, ans, ds)
            ds.splice(ds.indexOf(nums[i]), 1)
        }
    }
    let ans = []
    nums.sort()
    allSum(0, nums, ans, [])
    return ans
};

function subsets(nums) {
    let res = [];
    let subset = [];
    function dfs(i) {
        if (i >= nums.length) {
            res.push(subset.slice());
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);
    }

    dfs(0);

    return res;
}