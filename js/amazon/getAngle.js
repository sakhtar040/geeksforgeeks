class Solution {
    getAngle(H,M){
       //code here
       let a1, a2
       let min = 6.0 * M
       let hr = 30.0 * H + 0.5 * M
       a1 = Math.abs(hr - min)
       a2 = Math.abs(360 - a1)
       return Math.floor(Math.min(a1, a2))
    }
}