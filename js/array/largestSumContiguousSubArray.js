const largestSumContiguousSubArray = (arr) => {
    let max_so_far = Number.MIN_VALUE;
    let max_ending = 0;

    for(let i=0; i<arr.length; i++) {
        max_ending = max_ending + arr[i];
        if(max_so_far < max_ending) {
            max_so_far = max_ending;
        }
        if(max_ending < 0) {
            max_ending = 0;
        }
    }

    return max_so_far;
}

console.log(largestSumContiguousSubArray([-2, -3, 4, -1, -2, 1, 5, -3])) // Kadane's Algo