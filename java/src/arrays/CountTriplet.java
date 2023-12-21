package arrays;

import java.util.Arrays;
import java.util.Collections;

public class CountTriplet {
    public static void main(String[] args) {
        int[] arr = {-2, 0, 1, 3};
        int n = arr.length;
        int target = 2;
        System.out.println(countTriplet(arr, n, target));
    }

    static int countTriplet(int[] arr, int n, int target) {
        int count = 0;
        int[] arrDesc = Arrays.stream(arr).boxed()
                .sorted(Collections.reverseOrder())
                .mapToInt(Integer::intValue)
                .toArray();

        for(int i=0; i<n-2; i++) {
            int j = i+1;
            int k = n-1;
            while(j < k) {
                if((arrDesc[i] + arrDesc[j] + arrDesc[k]) >= target) {
                    k--;
                } else if ((arrDesc[i] + arrDesc[j] + arrDesc[k]) < target) {
                    count += (k-j);
                    j++;
                }
            }
        }

        return count;
    }
}
