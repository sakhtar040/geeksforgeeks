const fixedPoint = (arr) => {
	for(let i=0; i<arr.length; i++) {
		if(arr[i] == i) {
			return i;
		}
	}
	return -1;
}

console.log(fixedPoint([-10, -5, 3, 4, 7, 9]))