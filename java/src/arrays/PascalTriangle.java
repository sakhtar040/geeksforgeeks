package arrays;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PascalTriangle {
    public static void main(String[] args) {
        int numRows = 5;
        List<List<Integer>> result = generate(numRows);
        System.out.println(result);
    }

    private static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> output = new ArrayList<>();
        for(int i=1; i<=numRows; i++) {
            output.add(new ArrayList<>(Collections.nCopies(i, 1)));
        }

        for(int i=2; i<output.size(); i++) {
            List<Integer> prev = output.get(i-1);
            List<Integer> curr = output.get(i);
            for(int j=1; j<curr.size()-1; j++) {
                curr.set(j, prev.get(j-1) + prev.get(j));
            }

        }

        return output;
    }
}
