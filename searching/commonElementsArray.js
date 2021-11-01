class Solution{
    
    mergeSort(arr) {
    	let length = arr.length;
    	if (length < 2) return arr;
    	let mid = Math.floor(length / 2);
    	let left = arr.slice(0, mid);
    	let right = arr.slice(mid);
    	return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    merge(left, right) {
    	let array = [];
    	let leftLength = left.length;
    	let rightLength = right.length;
    	let l = 0;
    	let r = 0;
    	while (l < leftLength && r < rightLength) {
    		if (left[l] < right[r]) {
    			array.push(left[l++]);
    		} else {
    			array.push(right[r++]);
    		}
    	}
    	return array.concat(left.slice(l)).concat(right.slice(r));
    }
    
    binarySearch(arr, target, min, max) {
    	if (min === undefined) min = 0;
    	if (max === undefined) max = arr.length - 1;
    
    	var guess = Math.floor((max - min) / 2 + min);
    	if (max <= min && arr[guess] !== target) return null;
    	else if (arr[guess] === target) return true;
    	else if (arr[guess] < target)
    		return this.binarySearch(arr, target, guess + 1, max);
    	else return this.binarySearch(arr, target, min, guess - 1);
    }
    
    pushToArray(arr1, arr2) {
    	let arr = [];
    	for(let i=0; i<arr1.length; i++) {
    			if(this.binarySearch(arr2, arr1[i])) {
    				arr.push(arr1[i]);
    			}
    	}
    	return arr;
    }
    
    common_element(v1,v2){
        //code here
        let arr;
        v1 = this.mergeSort(v1);
        v2 = this.mergeSort(v2);
    	if(v1.length > v2.length) {
    		arr = this.pushToArray(v2, v1);
    	} else {
    		arr = this.pushToArray(v1, v2);
    	}
    	return arr;
    }
}