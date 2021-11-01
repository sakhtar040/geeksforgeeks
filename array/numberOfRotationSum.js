const array = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const output = 330

const rotateArray = (arr, n) => {
  let i=0;
	let j=n-1;
	while(i!=j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
	}
	return arr
}

const getSum = (arr, n) => {
	let sum = 0;
	for(let i=0; i<n; i++) {
		sum += i * arr[i];
	}
	return sum;
}

const validateOutput = (arr, n, output) => {
	let sum = getSum(arr, n);
	let count = 0;
	while(sum != output) {
		arr = rotateArray(arr, n);
		sum = getSum(arr, n);
		count++;
	}
	return count;
}

console.log(validateOutput(array, 10, output))