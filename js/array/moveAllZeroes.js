const moveAllZeroes = (arr, n) => {
	let count = 0;
    	for(let i=0; i<n; i++) {
				console.log(arr)
    		if(arr[i] !== 0) {
    		    arr[count++] = arr[i];
    		}
    	}
	console.log(arr, count)
    	while(count < n) {
    	    arr[count++] = 0
    	}
    	return arr;
}
												 
/*const arr = [3,5,0,0,4];
console.log(moveAllZeroes(arr, arr.length))*/

const pushZerosToEnd = (arr,n) => {
	//code here
	let i = 0
	while(i !== n-1) {
		console.log('1', arr, i)
		if(arr[i] === 0) arr.splice(i, 1)
		console.log('2', arr, i)
		i++
	}
	console.log(arr)

	let j = 0
	while(j != n) {
		if(!arr[j]){
			arr[j] = 0
		}
		j++
	}
	return arr
}

console.log(pushZerosToEnd([3, 5, 0, 0, 4], 5))