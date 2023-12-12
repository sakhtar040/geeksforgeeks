const countFrequency = (arr, k) => {
	let count=0;
	for(let i=0; i<arr.length; i++) {
		if(k == arr[i]) {
			count++
		}
	}
	return count;
}

console.log(countFrequency([1,1,2,2,2,2,3,3], 4))