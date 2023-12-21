package arrays;

import java.util.Arrays;

public class NextGreaterElement {
    public static void main(String[] args) {
        int[] nums1 = {2,4};
        int[] nums2 = {1,2,3,4};

        int[] result = nextGreaterElement(nums1, nums2);
        System.out.println(Arrays.toString(result));
    }

    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        for(int i = 0; i < nums1.length; i++){
            int max = -1;
            for(int j = 0; j < nums2.length; j++){
                int index = j;
                if(nums1[i] == nums2[j]){ // Found element in nums2 that matches current element in nums1
                    while(index != nums2.length){ // Iterate through remaining elements in nums2 to find next greater element
                        if(nums2[index] > nums1[i]){
                            max = nums2[index]; // Update max if we find a greater element
                            break;
                        }
                        index++;
                    }
                }
            }
            ans[i] = max;
        }
        return ans;
    }
}
