/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    if(nums.length === 1) return new TreeNode(nums[0]);
    
    function divideArray(start, end) {
        const length = end - start + 1;
        if(length === 0) return null;
        if(length === 1) return new TreeNode(nums[start]);
        const point = start + parseInt(length / 2);
        let newNode = new TreeNode(nums[point]);
        newNode.left = divideArray(start, point - 1);
        newNode.right = divideArray(point + 1, end);
        return newNode;
    }
    
    return divideArray(0, nums.length - 1);
};