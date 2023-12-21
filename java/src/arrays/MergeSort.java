package arrays;

import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] arr = { 9,3,5,1,6,2,4,8,7,0};
        System.out.println(Arrays.toString(mergeSort(arr)));
    }

    public static int[] mergeSort(int[] arr) {
        if(arr.length < 2) {
            return arr;
        }
        int mid = Math.abs(arr.length / 2);
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    private static int[] merge(int[] left, int[] right) {
        int l = 0;
        int r= 0;
        int leftLength = left.length;
        int rightLength = right.length;
        int[] res = new int[leftLength + rightLength];
        while(l<leftLength && r<rightLength) {
            if(left[l] < right[r]) {
                res[l+r] = left[l];
                l++;
            } else {
                res[l+r] = right[r];
                r++;
            }
        }

        while(l<leftLength) {
            res[l+r] = left[l];
            l++;
        }

        while(r<rightLength) {
            res[l+r] = right[r];
            r++;
        }

        return res;
    }
}
