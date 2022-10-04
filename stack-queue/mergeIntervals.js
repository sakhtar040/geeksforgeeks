class MergeIntervals {
    constructor() {}

    merge(intervals) {
        intervals.sort((a, b) => a[0]-b[0])
        let start = intervals[0][0]
        let end = intervals[0][1]
        for(let i=1; i<intervals.length; i++) {
            if(intervals[i][0] <= end) {
                end = intervals[i][1] < end ? end : intervals[i][1] // Math.max(intervals[i][1], end)
                start = intervals[i][0] < start ? intervals[i][0] : start // Math.min(start, intervals[i][0])
                intervals[i] = [start, end]
                intervals.splice(i-1, 1);
                i -= 1
            } else {
                start = intervals[i][0]
                end = intervals[i][1]
            }
        }
        return intervals
    }
}

const mergeIntervals = new MergeIntervals()
mergeIntervals.merge([[1, 3], [2, 4], [5, 7], [6, 8]])