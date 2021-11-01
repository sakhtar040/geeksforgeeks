const nearestSmallest = (arr) => {
	let stack = [];
	let finalArray = [];
	for(let i=0; i<arr.length; i++) {
		while(stack.length !==0 && stack[stack.length-1] >= arr[i]){
			stack.pop();
		}
		if(stack.length === 0) {
			finalArray.push('_');
		} else {
			finalArray.push(stack[stack.length-1]);
		}
		stack.push(arr[i]);
	}
	return finalArray;
}



console.log(nearestSmallest([1, 6, 4, 10, 2, 5]));



