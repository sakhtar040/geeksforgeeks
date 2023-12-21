package arrays;

import java.util.Arrays;

public class GetConcatenation {
    public static void main(String[] args) {
        int[] nums = {1, 2, 1};

        int[] results = getConcatenation(nums);

        System.out.println("Results: " + Arrays.toString(results));
    }

    public static int[] getConcatenation(int[] nums) {
        int[] numsArray = new int[2 * nums.length];

        for(int i=0; i<nums.length; i++) {
            numsArray[i] = nums[i];
            numsArray[i+nums.length] = nums[i];
        }

        return numsArray;
    }
}
