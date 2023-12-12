class Solution {
    getCount(S,N){
       //code here
       let map = {}
       let str = ""
       for(let i=0; i<S.length; i++) {
           if(map[S[i]]) {
               if(str !== S[i]) {
                   map[S[i]] += 1
               }
           } else {
               map[S[i]] = 1
           }
           
           str = S[i]
       }
       let count = 0
    	for(let item in map) {
    		if(map[item] === N) {
    			count++
    		}
    	}
    	return count
    }
}
