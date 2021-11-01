const mergeArray = (arr1, arr2) => {
	let finalArray = [];
	let length1 = arr1.length;
	let length2 = arr2.length;
	let l=0;
	let r=0;
	while(l<length1 && r<length2) {
		if(arr1[l] < arr2[r]) {
			finalArray.push(arr1[l++])
		} else {
			finalArray.push(arr2[r++])
		}
	}
	return finalArray.concat(arr1.splice(l)).concat(arr2.splice(r));
}

const sortArray = (arr) => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};


const findMedian = (arr1, arr2) => {
	let mergedArray = sortArray(mergeArray(arr1, arr2));
	let mid = Math.floor(mergedArray.length / 2);
	return mergedArray.length % 2 == 0 ? Math.floor((mergedArray[mid] + mergedArray[mid-1])/2) : mergedArray[mid];
}

console.log(findMedian([2, 3, 5, 8], [10, 12, 14, 16, 18, 20]));




