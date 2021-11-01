//My
const sort = (arr) => {
	let swapped;
	do{
		swapped = false;
		for(let i=0; i<arr.length; i++) {
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

const closestSumToZero = (arr) => {
	let sum = {}
	if(arr.length == 2) {
		return arr[0] + arr[1]
	}
	for(let i=0; i<arr.length; i++){
		for(let j=arr.length-1; j>i; j--) {
			if(Math.abs(arr[i] + arr[j]) < Math.abs(arr[i] + arr[j-1]) ) {
				if(Object.keys(sum).length === 0) {
					sum[0] = arr[i] + arr[j];
				}
				if(Object.keys(sum).length != 0 && Math.abs(sum[0]) > Math.abs((arr[i] + arr[j]))) {
						sum[0] = arr[i] + arr[j];
				}
			}
		}
	}
	return sum[0];
}

const closestToZero = (arr) => {
	arr = sort(arr);
	return closestSumToZero(arr);
}

console.log(closestToZero([1, 60, -10, 70, -80, 85]))

//There's
