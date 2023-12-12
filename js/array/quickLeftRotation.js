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
	d = d%n > n ? d%n - n : d%n;
	while(count != d) {
		arr = rotateArray(arr, n);
		count++
	}
	return arr;
}

console.log(multipleRotate([80,-62, -90, 7, 50, -41, 70, 8, -7, -9, 44, 22, -57, -97, 26, 72, 95, -39, 65, -51, 52, -29, -18, 4, 98, -3, 95, -11, -90], 29, 9944))