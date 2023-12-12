const find_median = (arr) => {
    //code here
    let swapped;
    do {
        swapped = false;
        for(let i=0; i< arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true
            }
        }
    } while(swapped);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 == 0 ? Math.floor((arr[mid] + arr[mid-1])/2) : arr[mid]
}

console.log(find_median([1, 5, 0, 6, 2]))