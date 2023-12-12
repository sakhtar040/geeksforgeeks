const zigzag = (arr) => {
    let n = arr.length
    for(let i=0; i<n; i++) {
        if(i%2!==0){
            if(arr[i]<arr[i-1]){
                var temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
            }
            if(arr[i]<arr[i+1]){
                 var temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
    }
    return arr
}

console.log(zigzag([4, 3, 7, 8, 6, 2, 1]));