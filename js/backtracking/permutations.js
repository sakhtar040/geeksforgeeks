const permutations = (numbers) => {
    const permute = (numbers, ans, ds, freq) => {
        if(ds.length === numbers.length) {
            ans.push([...ds])
            return
        }
        for(let i=0; i<numbers.length; i++) {
            if(!freq[i]) {
                freq[i] = true
                ds.push(numbers[i])
                permute(numbers, ans, ds, freq)
                freq[i] = false
                ds.splice(ds.indexOf(numbers[i]), 1)
            }
        }
    }

    let ans = []
    let freq = new Array(ans.length).fill(false)
    permute(numbers, ans, [], freq)
    return ans
}

//console.log(permutations([1, 2, 3]))

const permutationsString = (string) => {
    const permute = (string, ans) => {
        if(string.length === 0) {
            console.log(ans)
        }
        for(let i=0; i<string.length; i++) {
            let item = string[i]
            let left = string.slice(0, i)
            let right = string.slice(i+1)
            let rest = left + right
            permute(rest, ans + item)
        }
    }

    let ans = ""
    permute(string, ans)
}

//console.log(permutationsString("abc"))

function permute(nums) {
    const res = [];

    if (nums.length === 1) {
        return [nums.slice()];
    }

    for (const i of nums) {
        let n = nums.shift();

        let perms = permute(nums);

        for (const perm of perms) {
            perm.push(n);
        }

        perms.forEach((perm) => {
            res.push(perm);
        });

        nums.push(n);
    }

    return res;
}

function permutation2(nums, set = new Set()) {
    nums.sort()
    let res = []
    let visited = new Array(nums.length).fill(false)

    function backtrack(permutations) {
        if(permutations.length === nums.length) {
            return res.push([...permutations])
        }

        for(let i=0; i<nums.length; i++) {
            if(visited[i] || (i > 0 && nums[i] === nums[i-1] && !visited[i-1]) ) {
                continue
            }
            visited[i] = true
            permutations.push(nums[i])
            backtrack(permutations)
            visited[i] = false
            permutations.pop()
        }
    }

    backtrack([])
    return res
}

console.log(permutation2([1, 1, 2]));