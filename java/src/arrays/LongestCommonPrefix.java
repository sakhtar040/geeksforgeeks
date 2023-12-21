package arrays;

import java.util.Arrays;

public class LongestCommonPrefix {
    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight", "flour"};
        String result = longestCommonPrefix(strs);
        System.out.println(result);
    }

    public static String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs, (a, b) -> a.length() - b.length());

        String prefix = "";

        for(int i=0; i<strs[0].length(); i++) {
            boolean flag = true;
            char str = strs[0].charAt(i);
            for(int j=0; j<strs.length; j++) {
                if(strs[j].charAt(i) != str) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                prefix += str;
            } else {
                break;
            }
        }

        return prefix;
    }
}
