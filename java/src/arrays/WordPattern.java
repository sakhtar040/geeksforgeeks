package arrays;

import java.util.Arrays;
import java.util.HashMap;

public class WordPattern {
    public static void main(String[] args) {
        String pattern = "abc";
        String str = "dog cat dog";
        System.out.println(wordPattern(pattern, str));
    }

    public static boolean wordPattern(String pattern, String str) {
        String[] splitStr = str.split(" ");

        if(pattern.length() != splitStr.length) {
            return false;
        }

        HashMap<Character, String> map = new HashMap<>();

        for(int i=0; i<pattern.length(); i++) {
            char c = pattern.charAt(i);

            if(map.get(c) == null) {
                map.put(c, splitStr[i]);
            } else {
                if(!map.get(c).equals(splitStr[i])) {
                    return false;
                }
            }
        }

        String[] values = new String[map.size()];

        for(int i=0; i<map.size(); i++) {
            if(Arrays.asList(values).contains(map.values().toArray()[i])) {
                return false;
            }
            values[i] = (String) map.values().toArray()[i];
        }

        return true;
    }
}
