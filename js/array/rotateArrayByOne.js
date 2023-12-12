//Soultion 1
const array = [1,2,3,4,5,6]

const rotateArray = (arr) => {
	let lastItem = arr[arr.length - 1];
	arr.unshift(lastItem);
	arr.pop();
	return arr
}

console.log(rotateArray(array))

//Solution 2
//const array = [1,2,3,4,5,6]

const rotateArray1 = (arr, n) => {
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

console.log(rotateArray1(array, 6))