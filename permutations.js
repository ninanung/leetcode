// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*var recursive = function(nums, result, array, max) {
    if(array.length === max) result.push(array);
    for(let index in nums) {
        const newArray = array.slice()
        newArray.push(nums[index])
        const newNums = nums.slice();
        newNums.splice(index, 1);
        recursive(newNums, result, newArray, max)
    }
};

var permute = function(nums) {
    if(!nums.length) return [];
    if(nums.length === 1) return [nums];
    const result = [];
    nums.sort(function(a, b) {
        return a - b;
    })
    for(let index in nums) {
        const newNums = nums.slice();
        newNums.splice(index, 1);
        recursive(newNums, result, [nums[index]], nums.length)
    }
    return result;
};*/
var permute = function(nums) {
    const res = [];
    backtrack(nums, res);
    return res;
};

function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = n; i < nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, res, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}