const mergeSort = (arr) => {
    let length = arr.length;
    if (length < 2) return arr;
    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let array = [];
    let leftLength = left.length;
    let rightLength = right.length;
    let l = 0;
    let r = 0;
    while (l < leftLength && r < rightLength) {
        if (left[l] < right[r]) {
            array.push(left[l++]);
        } else {
            array.push(right[r++]);
        }
    }
    return array.concat(left.slice(l)).concat(right.slice(r));
};

const mergeWave = (arr1, arr2) => {
    arr2.sort((a, b) => b - a)
    let arr = []
    let l = 0
    let r = 0
    while(l !== arr1.length && r !== arr2.length) {
        arr.push(arr2[r++])
        arr.push(arr1[l++])
    }
    return arr.concat(arr2.slice(r)).concat(arr1.slice(l))
}

const waveArray = (arr) => {
    arr = mergeSort(arr)
    let mid = Math.floor((arr.length) / 2)
    arr = mergeWave(arr.slice(0, mid), arr.slice(mid))
    return arr
}

console.log(waveArray([2,4,7,8,9,10]))