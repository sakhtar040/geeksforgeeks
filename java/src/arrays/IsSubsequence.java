package arrays;

public class IsSubsequence {
    public static void main(String[] args) {
        String s = "abc";
        String t = "ahbgdc";

        System.out.println(isSubsequence(s, t));
    }

    public static boolean isSubsequence(String s, String t) {
        int i = 0;

        for(int j=0; j<t.length() && i<s.length(); j++) {
            if(s.charAt(i) == t.charAt(j)) {
                i++;
            }
        }

        return i == s.length();
    }
}
