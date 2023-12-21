package arrays;

import java.util.HashMap;

public class MaxNumberOfBalloons {
    public static void main(String[] args) {
        String text = "loonbalxballpoon";
        int result = maxNumberOfBalloons(text);
        System.out.println(result);
    }

    public static int maxNumberOfBalloons(String text) {
        int ballCount = 0;
        HashMap<Character, Integer> map = new HashMap<>();

        for(int i = 0; i < text.length(); i++) {
            char key = text.charAt(i);
            if(map.get(key) != null) {
                int count = map.get(key);
                map.put(key, ++count);
            } else {
                map.put(key, 1);
            }
        }

        String balloon = "balloon";

        while(true) {
            for(int i = 0; i < balloon.length(); i++) {
                char key = balloon.charAt(i);
                if(map.get(key) != null) {
                    int count = map.get(key);
                    if(count > 0) {
                        map.put(key, --count);
                    } else {
                        return ballCount;
                    }
                } else {
                    return ballCount;
                }
            }
            ballCount++;
        }
    }
}
