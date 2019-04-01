// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    let index = 0;
    while(index < nums.length) {
        if(nums[index] === target) {
            if(first === -1) {
                first = index;
                last = index;
            } else last = index;
        }
        index++;
    }
    return [first, last]
};