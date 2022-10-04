const stringForm = (n, ds, k, solutions) => {
    if(n === k) {
        solutions.push(ds.join(""))
        return
    }
    ds[k] = "0"
    stringForm(n, ds, k+1, solutions)
    ds[k] = "1"
    stringForm(n, ds, k+1, solutions)
}

const getBinaries = (n, ds, solutions) => {
    if(n <= 0) {
        return solutions
    }
    ds[0] = "0"
    stringForm(n, ds, 1, solutions)
    ds[0] = "1"
    stringForm(n, ds, 1, solutions)
}

const findDifferentBinaryString = function(nums) {
    let length = nums.length;
    let solutions = []
    getBinaries(length, new Array(length), solutions)
    let filteredList = solutions.filter(item => !nums.includes(item))
    return filteredList[Math.floor(Math.random() * (filteredList.length))]
};

const _findDifferentBinaryString = function(nums) {
    let obj={};
    for(let i of nums){
        obj[i]=1
    }
    let ans;

    function out(str){
        if(str.length===nums[0].length){
            if(!obj[str]){
                ans=str
            }
            return;
        }
        if(!ans){
            out(str+'0')
            out(str+'1')
        }
    }

    out('');
    return ans;
};

console.log(findDifferentBinaryString(["000", "001", "010", "011"]))
console.log(_findDifferentBinaryString(["000", "001", "010", "011"]))