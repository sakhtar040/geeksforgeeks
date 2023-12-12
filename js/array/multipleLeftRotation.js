const array = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rotateArray = (arr, n) => {
  let i=0;
	let j=n-1;
	while(i!=j) {
		let temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
		i++;
	}
	return arr
}

const multipleRotate = (arr, n, d) => {
	let count = 0;
	while(count != d) {
		arr = rotateArray(arr, n);
		count++
	}
	return arr;
}

console.log(multipleRotate(array, 10, 10))

//Solution 2
