// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*var recursive = function(nums, index, goal, array) {
    if(index > goal) {
        goal = index;
        if(goal === nums.length - 1) return goal; 
    }
    if(nums[index] === 0) return goal;
    for(let stand = index + 1; stand <= index + nums[index] && stand < nums.length; stand++) {
        if(array[stand] !== 'checked') {
            goal = recursive(nums, stand, goal, array)   
        }
    }
    array[index] = 'checked';
    return goal
}

var canJump = function(nums) {
    if(!nums.length) return false;
    if(nums.length === 1) return true;
    if(recursive(nums, 0, 0, []) === nums.length - 1) return true;
    else return false;
};*/
var canJump = function(nums) {
    if(!nums.length) return false;
    if(nums.length === 1) return true;
    if(!nums[0]) return false
    let standard  = 0;
    for(let index = nums.length - 1; index >= 0; index--) {
        if(!standard && nums[index] === 0 && index !== nums.length - 1) {
            standard = index;
            continue;
        }
        if(standard && nums[index] > standard - index) standard = index;
        if(standard && nums[standard] !== 0 && nums[index] >= standard - index) standard = index;
    }
    if(standard === 0) return true;
    else return false;
};