package arrays;

public class PivotIndex {
    public static void main(String[] args) {
        int[] nums = {1,2,3};
        int result = pivotIndex(nums);
        System.out.println(result);
    }

    public static int pivotIndex(int[] nums) {
        int totalSum = 0;
        int leftsum = 0;
        for (int ele : nums) {
            totalSum += ele;
        }
        for (int i = 0; i < nums.length; leftsum += nums[i++]) {
            if (leftsum * 2 == totalSum - nums[i]) {
                return i;
            }
        }

        return -1;
    }
}
