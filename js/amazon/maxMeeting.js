const maxMeetings = (start, end, n) => {
    // code here
    let count = 0
    let i=0
    let j=i+1
    while(i < n && j < n) {
        if(start[j] > end[i]) {
            count++
            i++
            j++
        } else if(i === j) {
            j++
        } else if(start[j] < end[i]) {
            i=i+2
            j++
            count++
        }
    }
    return count
}

console.log(maxMeetings([1,3,0,5,8,5], [2,4,6,7,9,9], 6))