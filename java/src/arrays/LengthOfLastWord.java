package arrays;

import java.util.Arrays;

public class LengthOfLastWord {
    public static void main(String[] args) {
        String s = "Hello World";

        System.out.println(lengthOfLastWord(s));
    }

    public static int lengthOfLastWord(String s) {
        String[] array = s.split(" ");
        String[] newArray = Arrays.stream(array).filter(si -> !si.isEmpty()).toArray(String[]::new);

        return newArray[newArray.length - 1].length();
    }
}
