class Solution {
    
    peakElement(arr, n)
    {
        // code here
        if (n == 1) return 0;
        if (arr[0] >= arr[1]) return 0;
        if (arr[n - 1] >= arr[n - 2]) return n - 1;
 
        // check for every other element
        for (var i = 1; i < n - 1; i++)
        {
         
          // check if the neighbors are smaller
          if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
        }
    }
}