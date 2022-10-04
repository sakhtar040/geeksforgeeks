const merge = (leftArr, rightArr) => {
    let l = 0;
    let r = 0;
    let count = 0;
    let res = [];
    let ll = leftArr.length;
    let rl = rightArr.length;
    while(l < ll && r < rl) {
        if(leftArr[l] < rightArr[r]) {
            res.push(leftArr[l++]);
        } else {
            res.push(rightArr[r++]);
            count++
        }
    }
    console.log(count)
    return res.concat(leftArr.slice(l)).concat(rightArr.slice(r));
}

const mergeSort = (arr) => {
    let length = arr.length
    if (length < 2) return arr;
    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

const inversionCount = (arr) => {
    let count = mergeSort(arr);
    return count;
}

console.log(inversionCount([1, 20, 6, 4, 5]))