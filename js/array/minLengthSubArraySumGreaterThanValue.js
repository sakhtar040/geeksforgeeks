const minLength = (arr, x, n) => {
    let minLength = n + 1;

    for(let i=0; i<n; i++) {
        let sum = arr[i];
        if(sum > x) return 1
        for(let j=i+1; j<n; j++) {
            sum = sum + arr[j]
            if(sum > x && (j-i+1) < minLength) {
               minLength = (j-i+1)
            }
        }
    }
    return minLength
}

console.log(minLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280, 10))