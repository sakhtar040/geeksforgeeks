function maxTripletSum(arr, n)
{
    let maxA = Number.MIN_SAFE_INTEGER;
    let maxB = Number.MIN_SAFE_INTEGER;
    let maxC = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxA) {
            maxC = maxB;
            maxB = maxA;
            maxA = arr[i];
        } else if (arr[i] > maxB) {
            maxC = maxB;
            maxB = arr[i];
        }else if (arr[i] > maxC){
            maxC = arr[i];
        }
    }
    return (maxA + maxB + maxC);
}