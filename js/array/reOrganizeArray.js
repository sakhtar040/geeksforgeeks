const reArrange = () => {
	let array = [-1, -1, 6, 1, 9, 3, 2, -1, 4,-1];
	let set = new Set();
	
	for(let i=0; i<array.length; i++) {
		set.add(array[i])
	}
	for(let i = 0; i < array.length; i++){
		if(set.has(i))
			array[i] = i;
		else
			array[i] = -1;
	}
	
	console.log(set, array)
}

reArrange();

//Solution 2
// 1. sort then search
// 2. iterate