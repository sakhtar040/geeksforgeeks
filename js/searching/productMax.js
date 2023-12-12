const product = (arr) => {
	arr.sort((a, b) => a - b);
	console.log(arr);
	let product;
	let pair;
	if (arr[arr.length - 1] > 0 && arr[arr.length - 2] > 0) {
		product = arr[arr.length - 2] * arr[arr.length - 1];
		pair = [arr[arr.length - 2], arr[arr.length - 1]];
	} else if (arr[arr.length - 1] < 0 && arr[arr.length - 2] < 0) {
		product = arr[arr.length - 1] * arr[arr.length - 2];
		pair = [arr[arr.length - 2], arr[arr.length - 1]];
	} else {
		product = arr[0] * arr[1];
		pair = [arr[1], arr[0]];
	}
	return pair;
};

console.log(product([1, 4, 3, 6, 7, 0]));

/* def sumOfProduct(arr1, arr2):
    arr1.sort()
    arr2.sort()
    product = 0
    for i in range(len(arr1)):
        product = product + arr1[i] * arr2[i]
        
    return product

print(sumOfProduct([5,1,3,4,2], [8,10,9,7,6])) */
