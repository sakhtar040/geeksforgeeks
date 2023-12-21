package arrays;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class FindDisappearedNumbers {
    public static void main(String[] args) {
        int[] nums = {4,3,2,7,8,2,3,1}; // [5,6]
        List<Integer> result = findDisappearedNumbers(nums);
        System.out.println(result);
    }

    public static List<Integer> findDisappearedNumbers(int[] nums) {
        Arrays.sort(nums);
        List<Integer> result = new ArrayList<>();
        HashMap<Integer, Boolean> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            map.put(nums[i], true);
        }

        for(int i = 1; i <= nums.length; i++) {
            if(map.get(i) == null) {
                result.add(i);
            }
        }

        return result;
    }
}
