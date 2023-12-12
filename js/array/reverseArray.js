//Reverse Array from index

//Solution 1
const array = [1,2,3,4,5,6]

const rotateArray = (arr, index) => {
    let array1 = arr.splice(index);
    return array1.concat(arr)
}

console.log(rotateArray(array, 2))

//Solution 2
//const array = [1,2,3,4,5,6]

const leftRotate = (arr) => {
	let temp = arr[0];
	for(let i=0; i< arr.length; i++) {
		arr[i] = arr[i+1]
	}
	arr[arr.length -1] = temp;
	return arr;
}

const rotateArray = (arr, index) => {
    for(let i=0; i<index; i++) {
			leftRotate(arr);
		}
	return arr
}

console.log(rotateArray(array, 2))

//Solution 3
//const array = [1,2,3,4,5,6]

const leftRotate = (arr, d, n) => {
	while(d < n) {
		let temp = arr[d];
		arr[d] = arr[n];
		arr[n] = temp;
		d++;
		n--;
	}
	return arr;
}

const rotateArray = (arr, d, n) => {
	if(d === 0) {
		return;
	}
	arr = leftRotate(arr, 0, d-1);
	arr = leftRotate(arr, d, n-1);
	arr = leftRotate(arr, 0, n-1);

	/*arr = leftRotate(arr, 0, n-1);
	arr = leftRotate(arr, 0, d-1);
	arr = leftRotate(arr, d, n-1);*/ //right rotate
	return arr;
}

console.log(rotateArray(array, 2, 6))

//Solution 4
//const array = [1,2,3,4,5,6]

const rotateArray = (arr) => {
    let maxLength = arr.length - 1;
    let halfLength = maxLength / 2;
    for(let i=0; i<halfLength; i++) {
        let temp = arr[i];
        arr[i] = arr[maxLength-i];
        arr[maxLength-i] = temp;
	}
	return arr
}

console.log(rotateArray(array, 2, 6))