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

const searchItem = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;
	let mid = Math.floor((high - low) / 2 + low);
	if (item == arr[mid]) {
		return arr[mid];
	}
	if (arr[mid] < item) {
		return searchItem(arr.splice(mid + 1, arr.length - 1), item);
	} else if (arr[mid] > item) {
		return searchItem(arr.splice(0, mid - 1), item);
	} else {
		return -1;
	}
};

const findPair = (arr, diff) => {
	arr = sortArray(arr);
	console.log(arr);
	for (let num of arr) {
		let target = diff + num;
		let itemSearched = searchItem(arr, target);
		if (itemSearched !== -1) {
			return [num, target];
		} else {
			return -1;
		}
		console.log("Target: ", target, "Item: ", itemSearched);
	}
	return arr[arr.length - 1];
};

console.log(findPair([5, 20, 3, 2, 50, 80], 78));
