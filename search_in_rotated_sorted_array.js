// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums[0] > target) {
        for(let i = nums.length - 1; i >= 0; i--) {
            if(nums[i] === target) return i;
        }
        return -1;
    } else {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === target) return i;
        }
        return -1;
    }
};