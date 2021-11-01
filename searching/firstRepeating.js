const array = [10, 5, 3, 4, 3, 5, 6];

const repeated = (obj) => {
	for(let i=0; i<Object.keys(obj).length; i++) {
		if(obj[i].count > 1) {
			return obj[i].value;
		}
	}
}

const checkExistingObject = (obj, item) => {
	for(let i=0; i<Object.keys(obj).length; i++) {
		if(obj[i].value === item) {
			return i;
		}
	}
	return -1;
}

const findRepeatedSmallestIndexElement = (array) => {
	let obj = {};
	for(let i=0; i<array.length; i++) {
		if(!Object.keys(obj).length) {
			Object.assign(obj, {[i]: {value: array[i], count: 1}});
		} else if(checkExistingObject(obj, array[i]) != -1) {
			obj[checkExistingObject(obj, array[i])].count++;
		} else {
			Object.assign(obj, {[i]: {value: array[i], count: 1}});
		}
	}
	return repeated(obj);
}

console.log(findRepeatedSmallestIndexElement(array));