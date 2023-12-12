class Solution{
    nextGreatest(arr,n){
        //code here
        let j=-1,cur=0;
	    for(let i=n-2;i>=0;i--){
	        cur=Math.max(arr[i+1],j);
	        arr[i+1]=j;
	        j=cur;
	    }
	    arr[0]=j;
    }
}