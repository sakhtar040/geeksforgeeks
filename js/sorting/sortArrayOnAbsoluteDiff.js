const sortArray = (arr, x) => {
    let swapped;
    do {
        swapped = false;
        for(let i=0; i<arr.length; i++) {
            if(Math.abs(x - arr[i]) > Math.abs(x - arr[i+1])) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped)

    return arr
}

console.log(sortArray([10, 5, 3, 9, 2], 7)) // n2

