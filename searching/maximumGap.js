const maximumGap = (arr) => {
    if(arr.length < 2) {
        return 0
    }

    const obj = {}
    for(let i=0; i<arr.length; i++) {
        obj[arr[i]] = arr[i]
    }

    if(Object.keys(obj) < 2) {
        return 0
    }

    let maxDiff = -1000000000
    for(let i=0; i< Object.keys(obj).length; i++) {
        let diff = Math.abs(obj[Object.keys(obj)[i]] - obj[Object.keys(obj)[i+1]])
        if(maxDiff < diff) {
            maxDiff = diff
        }
    }
    return maxDiff
}

console.log(maximumGap([1,1,1,1]))

//or

var maximumGap = function(nums) {
    let obj={};
    nums.forEach((elem)=>{obj[elem]=elem});
    let max=0;
    let pre=Infinity;
    for(let key in obj){
        max=Math.max(max,obj[key]-pre);
        pre=obj[key];
    }
    return max;
};