const imediateSmallest = (arr) => {
	let finalArray = [];
	for(let i=0; i<arr.length; i++) {
		if(i+1 == arr.length) {
			finalArray.push(-1);
		} else if(arr[i+1] < arr[i]){
			finalArray.push(arr[i+1]);
		} else {
			finalArray.push(-1);
		}
	}
	return finalArray;
}



console.log(imediateSmallest([468,335,501,170,725,479,359,963,465,706,146,282,828,962,492,996,943,828,437,392,605,903,154,293,383,422,717,719,896,448,727,772,539,870,913,668,300,36,895,704,812,323]));



