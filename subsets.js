// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var recursive = function(nums, index, result, array=[]) {
    const newArray = array.slice();
    newArray.push(nums[index])
    for(let i = index + 1; i < nums.length; i++) {
        recursive(nums, i, result, newArray);
    }
    result.push(newArray);
};

var subsets = function(nums) {
    if(nums.length === 0) return [];
    const result = [[]];
    for(let index = 0; index < nums.length; index++) {
        recursive(nums, index, result);
    }  
    return result;
};