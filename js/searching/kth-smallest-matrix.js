let k = 7;
const matrix = [[10, 20, 30, 40], [15, 25, 35, 45], [24, 29, 37, 48], [32, 33, 39, 50]];

const merged = (leftArray, rightArray) => {
	let leftLength = leftArray.length;
	let rightLength = rightArray.length;
	let l=0;
	let r=0;
	let finalArray = [];
	while(l<leftLength && r<rightLength) {
		if(leftArray[l] < rightArray[r]) {
			finalArray.push(leftArray[l++]);
		} else {
			finalArray.push(rightArray[r++]);
		}
	}
	return finalArray.concat(leftArray.splice(l)).concat(rightArray.splice(r));
}

const mergeArray = (matrix) => {
	let lengthHead = matrix.length;
	console.log(lengthHead);
	let finalArray=[];
	for(let i=0; i<lengthHead; i++) {
		console.log(matrix[i]);
		finalArray = merged(finalArray, matrix[i]);
	}
	return finalArray;
}

const smallNumber = (matrix, k) => {
	let sortedArray = mergeArray(matrix);
	return sortedArray[k-1];
}

console.log(smallNumber(matrix, k));