const minElementSortedRotatedArray = (arr) => {
    let n = arr.length
    let i = 0;
    let j = n - 1;

    while(i < j) {
        let mid = Math.floor(i + (j - i) / 2);
        console.log(mid, i, j)
        if(arr[mid] === arr[j]) {
            j--;
        } else if(arr[mid] > arr[j]) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return arr[j];
}

console.log(minElementSortedRotatedArray([5,6,1,2,3,4]))