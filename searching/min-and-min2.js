//My
const sort = (arr) => {
	let swapped;
	do {
		swapped = false;
		for(let i=0; i< arr.length; i++){
			if(arr[i] > arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return arr;
}

const minAndMin2 = (arr) => {
	arr = sort(arr);
	let finalArray = [];
	for(let i=0; i< arr.length; i++) {
		if(finalArray.length == 0) {
			finalArray.push(arr[i]);
		} else {
			if(finalArray[0] < arr[i]) {
				finalArray.push(arr[i]);
				return finalArray;
			}
		}
	}
    return [-1];
}

console.log(minAndMin2([1,2,1,6,7]));

//There's
/* minAnd2ndMin(arr,n){
    //code here
    let i, first, second;

    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < n ; i ++){
        if (arr[i] < first){
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        return [-1]
    else
        return [first, second]
} */