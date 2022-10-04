const rotateArray = (arr) => {
    let i=0;
    let j=arr.length-1;
    while(i!==j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
    }
    return arr
}

const calculateSum = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum = sum + (i * arr[i]);
    }
    return sum;
}

const findRotatedArraySum = (arr, sum, initialArr) => {
    arr = rotateArray(arr);
    let rotatedArraySum = calculateSum(arr);
    if(initialArr.toString() !== arr.toString()) {
        sum <= rotatedArraySum && (sum = rotatedArraySum);
        return findRotatedArraySum(arr, sum, initialArr);
    }
    return sum;
}

const findMaxSum = (arr) => {
    let initialArr = [...arr];
    let sum = calculateSum(arr);
    return findRotatedArraySum(arr, sum, initialArr);
}

console.log(findMaxSum([3, 2, 1])) // n

//https://www.geeksforgeeks.org/find-maximum-value-of-sum-iarri-with-only-rotations-on-given-array-allowed/