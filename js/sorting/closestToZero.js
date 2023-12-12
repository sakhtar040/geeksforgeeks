class Solution {

    closestToZero(arr,n){
        //code here
        arr = arr.sort((a, b) => Math.abs(a) - Math.abs(b))
        let min = 999999
        for(let i=0; i<n; i++) {
            let sum = arr[i] + arr[i+1]
            if(Math.abs(sum) < Math.abs(min)) {
                min = sum
            } else if(Math.abs(sum) == Math.abs(min)) {
                min = Math.max(sum, min)
            }
        }
        return min
    }
}