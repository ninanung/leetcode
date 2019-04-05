// https://leetcode.com/problems/merge-intervals/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    intervals.sort(function(a, b) {
        return a.start - b.start
    })
    for(let index = 1; index < intervals.length; index++) {
        if(intervals.length > 1 && intervals[index - 1].end >= intervals[index].start) {
            const start = intervals[index - 1].start < intervals[index].start ? intervals[index - 1].start : intervals[index].start;
            const end = intervals[index - 1].end < intervals[index].end ? intervals[index].end : intervals[index - 1].end;
            intervals.splice(index - 1, 2, {start, end});
            index--;
        }
    }
    return intervals;
};