let array = [13,19,22,32,75,112,123,162,167,173,183,183,196,205,221,223,224,256,269,284,301,320,325,332,344,359,365,368,377,392,409,416,423,427,429,435,440,448,461,475,482,487,487,491,496,510,511,533,535,548,553,557,574,578,584,590,595,606,644,673,678,678,693,696,701,724,755,760,763,765,775,777,780,788,790,807,822,857,875,903,909,911,913,926,946,949,951,959,968,969,970,973,975,983];
let k = 20;
let x = 416;

const sortArray = (arr) => {
	let swapped;
	do{
		swapped = false;
		for(let i=0; i<arr.length-1; i++) {
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

const merged = (leftArray, rightArray) => {
	let leftLength = leftArray.length;
	let rightLength = rightArray.length;
	let l=0;
	let r=0;
	let finalArray = [];
	while(l<leftLength && r<rightLength) {
		if(leftArray[l] < rightArray[r]) {
			finalArray.push(leftArray[l++]);
		} else {
			finalArray.push(rightArray[r++]);
		}
	}
	return finalArray.concat(leftArray.splice(l)).concat(rightArray.splice(r));
}

const findClosest = (array, x) => {
	let finalArray = [];
	for(let num of array) {
		finalArray.push(x > num ? x - num : num - x);
	}
	return finalArray;
}

const binarySearch = (arr, target, min, max) => {
	if (min === undefined) min = 0;
	if (max === undefined) max = arr.length - 1;

	var guess = Math.floor((max - min) / 2 + min);
	if(arr[0] === target) return target;
	if (max <= min && arr[guess] !== target) return null;
	else if (arr[guess] === target) return guess;
	else if (arr[guess] < target)
		return binarySearch(arr, target, guess + 1, max);
	else return binarySearch(arr, target, min, guess - 1);
}

const computeArray = (finalArray, x) => {
	console.log(finalArray, x, array)
	let arr = [];
	for(let num of finalArray) {
		if(binarySearch(array, x+num)) {
			console.log('Arr', arr, num, x, x-num, x+num)
			if(binarySearch(arr, x+num)) {
				if(binarySearch(array, x-num)) {
					console.log('If', x, num);
					arr.push(x-num)
				} else {
					console.log('else', x, num);
					arr.push(x+num)	
				}
				continue;
			}
			arr.push(x+num);
		} else {
			arr.push(x-num)
		}
	}
	return arr;
}

const kClosest = (array, k, x) => {
	let index;
	for(let i=0; i<array.length; i++) {
		if(x === array[i]) {
			index = i;
		}
	}
	let leftArray = array.slice(0, index);
	let rightArray = array.slice(index+1, array.length);
	let finalLeftArray = findClosest(leftArray, x);
	let finalRightArray = findClosest(rightArray, x);
	let finalArray = merged(sortArray(finalLeftArray), finalRightArray);
	let computedResult = computeArray(finalArray.splice(0, k), x);
	return computedResult;
}

console.log(kClosest(array, k, x));










