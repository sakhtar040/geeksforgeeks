class Solution {
    getPairsCount(arr,n,k){
        //code here
        let count = 0
        let map = {}
        for(let i=0; i<n; i++) {
            if((k-arr[i]) in map) {
                count += map[k-arr[i]]
            }
            if(arr[i] in map) {
                map[arr[i]]++
            } else {
                map[arr[i]] = 1
            }
        }
        return count
    }
}