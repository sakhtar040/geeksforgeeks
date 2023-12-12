const reArragnePosNeg = (arr, n) => {
	//applying quick sort pivot strategy
	let j=-1;
	let temp = 0;
	for(let i=0; i<n; i++) {
		if(arr[i] < 0) {
			j++
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
	}
	
	let pos = j+1;
	let neg = 0;
	
	while(pos < n && neg < pos && arr[neg] < 0) {
		let temp = arr[neg];
		arr[neg] = arr[pos];
		arr[pos] = temp;
		neg += 2;
		pos += 1;
	}
	
	return arr;
}
												 
const arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(reArragnePosNeg(arr, arr.length))

//Solution 2
const reArragnePosNeg1 = (arr, n) => {
    arr.sort();
	//applying quick sort pivot strategy
	let i=1, j=1;
	while(j<n) {
        if(arr[j] > 0) {
            break;
        }
        j += 1;
    }
	
	while(arr[i] < 0 && j<n) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i += 2;
		j += 1;
	}
	
	return arr;
}
												 
const arr1 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(reArragnePosNeg1(arr1, arr1.length))