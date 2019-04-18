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
var isValidBST = function(root) {
    let result = true;
    if(root === null) return true;
    if(root.left !== null) {
        if(root.left.val >= root.val) return false;
        else result = isValidBST(root.left);
        if(!result) return false;
    }
    if(root.right !== null) {
        if(root.right.val <= root.val) return false;
        else result = isValidBST(root.right);
    }
    return result
};