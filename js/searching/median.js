const mergeArray = (arr1, arr2) => {
	let finalArray = [];
	let length1 = arr1.length;
	let length2 = arr2.length;
	let l = 0, r = 0;
	while(l < length1 && r < length2) {
		if(arr1[l] < arr2[r]) {
			finalArray.push(arr1[l++]);
		} else {
			finalArray.push(arr2[r++]);
		}
	}
	return finalArray.concat(arr1.splice(l)).concat(arr2.splice(r));
}

let finalArray = mergeArray([1,12,15,26,38,48, 58], [2,13,17,30,45,50, 53]);
let mid = Math.floor((finalArray.length - 1 + 0) / 2);
let average = Math.floor((finalArray[mid] + finalArray[mid - 1]) / 2);

console.log(finalArray, mid, average);

const findMedian = (arr) => {
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
	return arr.length % 2 == 0 ? Math.floor((arr[mid] + arr[mid-1])/2) : arr[mid];
}

console.log(findMedian([19,11]))