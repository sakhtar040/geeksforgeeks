package arrays;

public class CanPlaceFlowers {
    public static void main(String[] args) {
        int[] nums = {0};
        int n = 1;
        boolean result = canPlaceFlowers(nums, n);
        System.out.println(result);
    }

    public static boolean canPlaceFlowers(int[] nums, int n) {
        int count = 0;

        for(int i=0; i<nums.length; i++) {
            if(nums[i] == 0) {
                if(i == 0) {
                    if(i+1 < nums.length && nums[i+1] == 0) {
                        count++;
                        nums[i] = 1;
                    }
                } else if(i == nums.length-1) {
                    if(i-1 >= 0 && nums[i-1] == 0) {
                        count++;
                        nums[i] = 1;
                    }
                } else {
                    if(nums[i-1] == 0 && nums[i+1] == 0) {
                        count++;
                        nums[i] = 1;
                    }
                }
            }
        }

        if(nums.length == 1 && nums[0] == 0) {
            count++;
        }

        return count >= n;
    }
}
