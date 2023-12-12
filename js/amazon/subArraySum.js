class Solution
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        //your code here
        let ptr1 = 0, ptr2 = 0, currentSum = arr[0];
        if(currentSum === s)
            return [ptr1+1, ptr2+1];
        if (s === 0)
            return [-1];

        while(ptr2 < n - 1) {
            if(currentSum + arr[ptr2+1] <= s) {
                currentSum += arr[ptr2 + 1]
                ptr2++;
            }else {
                currentSum -= arr[ptr1];
                ptr1++;
            }

            if(currentSum === s) {
                return [ptr1 + 1, ptr2 + 1];
            }
        }

        return [-1]
    }
}