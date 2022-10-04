class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n){
        // code here
    	if(d === 0) {
		    return;
    	}
    	d=d%n
    	arr = this.leftRotate(arr, 0, d-1);
    	arr = this.leftRotate(arr, d, n-1);
    	arr = this.leftRotate(arr, 0, n-1);
    	return arr;
    }
    
    leftRotate(arr, d, n) {
        while(d < n) {
    		let temp = arr[d];
    		arr[d] = arr[n];
    		arr[n] = temp;
    		d++;
    		n--;
    	}
    	return arr;
    }
}