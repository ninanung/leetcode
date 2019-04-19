// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min=-Infinity, max=Infinity) {
    let result = true;
    if(root === null) return true;
    if(root.left !== null) {
        if(root.left.val < root.val && root.left.val > min) {
            result = isValidBST(root.left, min, root.val)
        } else result = false
    }
    if(!result) return result
    if(root.right !== null) {
        if(root.right.val > root.val && root.right.val < max) {
            result = isValidBST(root.right, root.val, max)
        } else result = false
    }
    return result
};