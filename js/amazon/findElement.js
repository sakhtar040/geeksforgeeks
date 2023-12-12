const findElement = (arr,n) => {
    //code here
    let leftMax = new Array(n).fill(0)
    leftMax[0] = Number.MIN_VALUE

    for(let i=1; i<n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], arr[i-1])
    }

    console.log(leftMax)

    let rightMin = Number.MAX_VALUE

    for(let i=n-1; i>=0; i--) {
        if(leftMax[i] < arr[i] && rightMin > arr[i]) {
            console.log("if")
            return arr[i]
        }
        rightMin = Math.min(rightMin, arr[i])
    }
    console.log(rightMin)
    return -1


    //or


    let max= arr[0];
    let a= [];
    let b= [];
    a.push(max);
    for(let i=1;i<n;i++){
        if(max< arr[i]){
            max= arr[i];
        }
        a.push(max)
    }
    let min = arr[n-1]
    b.unshift(min);
    for(let i=n-2;i>=0;i--){
        if(min> arr[i]){
            min= arr[i];
        }
        b.unshift(min)
    }
    for(let i=1;i< n-1;i++){
        if(a[i]===b[i]) return a[i]
    }
    return -1
}

console.log(findElement([11, 9, 12], 3))