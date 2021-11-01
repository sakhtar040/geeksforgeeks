const sortArray = (arr) => {
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

const kLargest = (arr, k) => {
	arr = sortArray(arr);
	let finalArray = [];
	let totalElements = 1;
	for(let i=arr.length-1; i>0; i--) {
		if(totalElements <= k) {
			finalArray.push(arr[i]);
			totalElements++;
		}
	}
	return finalArray;
}

console.log(kLargest([1, 23, 12, 9, 30, 2, 50], 3));

//Reverse Bubble Sort
const sortArray = (arr) => {
	let swapped;
	do {
		swapped = false;
		for(let i=0; i< arr.length; i++){
			if(arr[i] < arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return arr;
}

const kLargest = (arr, k) => {
	arr = sortArray(arr);
	let finalArray = [];
	for(let i=0; i<k; i++) {
		finalArray.push(arr[i]);
	}
	return finalArray;
}