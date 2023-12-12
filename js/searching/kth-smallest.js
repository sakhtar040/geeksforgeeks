class Solution {
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
    
  kthSmallest(arr,l,r,k){
    //code here
    arr = this.mergeSort(arr);
    return arr[k-1]
  }
}