class Solution {
    minSwap(arr,n,k){
        var count = 0;
        for (var i = 0; i < n; ++i){
            if (arr[i] <= k){
                ++count;
            }
        }
         
        var bad = 0;
        for (var ij = 0; ij < count; ++ij){
            if (arr[ij] > k){
                ++bad;
            }
        }
        
        var ans = bad;
        for (var ik = 0, j = count; j < n; ++ik, ++j) {
            if (arr[ik] > k){
                --bad;
            }
            if (arr[j] > k){
                ++bad;
            }
            ans = Math.min(ans, bad);
        }
        return ans;
    }
}