package arrays;

import java.util.HashMap;

public class ContainsDuplicate {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};

        System.out.println(containsDuplicate(arr));
    }

    public static boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Integer> num = new HashMap<>();

        for(int i=0; i<nums.length; i++) {
            if(num.get(nums[i]) != null) {
                return true;
            } else {
                num.put(nums[i], nums[i]);
            }
        }

        return false;
    }
}
