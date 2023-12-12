const longestConsecutiveSubsequence = (arr) => {
    let set = new Set();
    let length = 0

    for(let i=0; i<arr.length; i++) {
        set.add(arr[i]);
    }

    for(let item of set) {
        if(!set.has(item-1)) {
            let j = 0
            while(set.has(item++)) {
                j++
            }

            length = Math.max(length, j)
        }
    }

    return length
}

console.log(longestConsecutiveSubsequence([0,3,7,2,5,8,4,6,0,1]))