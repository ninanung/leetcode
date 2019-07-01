/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    const sortedNums = nums.sort((a, b) => {
        return a - b;
    })
    let maxSequence = 1;
    let result = 0;
    for(const index in sortedNums) {
        if(sortedNums[index] === sortedNums[index - 1]) continue;
        if(index > 0 && sortedNums[index] - sortedNums[index - 1] === 1) maxSequence++;
        else {
            if(result < maxSequence) result = maxSequence;
            maxSequence = 1;
        }
    }
    if(result < maxSequence) result = maxSequence;
    return result
};