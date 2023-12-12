class Solution {
    remAnagram(str1, str2){
        // code here
        let counter1 = {},
        counter2 = {};
      for (let char of str1) {
        counter1[char] = (counter1[char] || 0) + 1;
      }
      for (let char of str2) {
        counter2[char] = (counter2[char] || 0) + 1;
      }

      let result = 0;
      for (let char of str1) {
        if (!counter2[char]) {
          result++;
        } else {
          counter2[char] -= 1;
        }
      }
      for (let char of str2) {
        if (!counter1[char]) {
          result++;
        } else {
          counter1[char] -= 1;
        }
      }

    return result ;
    }
}