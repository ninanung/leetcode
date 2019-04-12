// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let high = nums.length;
    let index = 0;
    while(index < high) {
        if(nums[index] === 0) {
            [nums[index], nums[low]] = [nums[low], nums[index]]
            low++
        } else if(nums[index] === 2) {
            high--
            [nums[index], nums[high]] = [nums[high], nums[index]]
            index--
        }
        index++;
    }
};