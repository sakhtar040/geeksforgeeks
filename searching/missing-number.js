const missingNumber = (array, n) => {
	let sumTotal = 0;
	let n = array.length + 1;
	let sum = (n * (n + 1)) / 2;
	for (let i = 0; i <= array.length - 1; i++) {
		sumTotal += array[i];
	}
	return sum - sumTotal;
};

console.log(missingNumber([1, 2, 4, 5], 3));
