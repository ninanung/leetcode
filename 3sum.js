// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    nums.sort(function(a, b) {
        return a - b
    })
    if(nums[0] > 0 || nums[nums.length - 1] < 0) return [];
    const result = [];
    for(let index = 0; index < nums.length - 2; index++) {
        if(nums[index] > 0) return result;
        if(index > 0 && nums[index] === nums[index - 1]) continue;
        let left = index + 1;
        let right = nums.length - 1;
        while(left < right) {
            if(nums[index] + nums[left] + nums[right] === 0) {
                result.push([nums[index], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
				while (left < right && nums[right] === nums[right + 1]) right--;
            }
            if(nums[index] + nums[left] + nums[right] > 0) right--;
            if(nums[index] + nums[left] + nums[right] < 0) left++;
        }
    }
    return result;
};