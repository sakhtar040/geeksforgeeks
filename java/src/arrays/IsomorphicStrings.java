package arrays;

import java.util.HashMap;

public class IsomorphicStrings {
    public static void main(String[] args) {
        String s = "paper";
        String t = "title";
        boolean result = isIsomorphic(s, t);
        System.out.println(result);
    }

    public static boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length()) {
            return false;
        } else {
            boolean result = true;

            HashMap<String, String> map = new HashMap<>();

            for(int i = 0; i < s.length(); i++) {
                String key = String.valueOf(s.charAt(i));
                String value = String.valueOf(t.charAt(i));

                if(map.get(key) != null) {
                    if(!map.get(key).equals(value)) {
                        result = false;
                        break;
                    }
                } else {
                    if(map.containsValue(value)) {
                        result = false;
                        break;
                    } else {
                        map.put(key, value);
                    }
                }
            }

            return result;
        }
    }
}
