package arrays;

public class LeftRotateArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        int n = arr.length;
        int d = 2;

        d = d % n;

        leftRotate(arr, 0, d-1);
        leftRotate(arr, d, n-1);
        leftRotate(arr, 0, n-1);

        for (int i : arr) {
            System.out.print(i + " ");
        }
    }

    public static void leftRotate(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];

            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }
}
