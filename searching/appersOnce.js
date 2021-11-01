const findOnce = (arr,n) => {
    //code here
    let ans = -1;
    for (let i = 0; i < n; i += 2) {
        if (arr[i] != arr[i + 1]) {
            ans = arr[i];
            break;
        }
    }
 
    if (arr[n - 2] != arr[n - 1])
            ans = arr[n-1];
    return ans
}