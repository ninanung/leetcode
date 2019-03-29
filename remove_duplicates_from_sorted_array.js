// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let same = nums[0]
    for(let num = 1; num < nums.length; num++) {
        if(same === nums[num]) {
            nums.splice(num, 1);
            num--;
        } else same = nums[num]
    }
    return nums.length
}