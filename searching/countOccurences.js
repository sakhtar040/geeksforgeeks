class Solution {
    //sort
    sortArray(arr){
    	let swapped;
    	do {
    		swapped = false;
    		for(let i=0; i< arr.length; i++){
    			if(arr[i] > arr[i+1]){
    				let temp = arr[i];
    				arr[i] = arr[i+1];
    				arr[i+1] = temp;
    				swapped = true
    			}
    		}
    	} while(swapped);
    	return arr;
    }
    
    findResult(obj, item){
    	let arr = Object.keys(obj);
    	let result = []
    	for(let i=0; i<arr.length; i++) {
    		if(obj[arr[i]] > item) {
    			result.push(parseInt(arr[i]));
    		}
    	}
    	return result;
    }
    
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k) {
        //your code here
        arr = this.sortArray(arr);
    	let obj = {};
    	for(let num of arr) {
    		if(Object.keys(obj).length === 0) {
    			Object.assign(obj, {[num]: 1});
    		} else if(!Object.keys(obj).includes(num.toString())) {
    			Object.assign(obj, {[num]: 1});
    		} else {
    			obj[num] = obj[num] + 1;
    		}
    	}
    	let targetItems = Math.floor(n/k);
    	let result = this.findResult(obj, targetItems);
    	return result.length;
    }
}