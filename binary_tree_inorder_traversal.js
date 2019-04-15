// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, result=[]) {
    if(root === null) return [];
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
    return result;
};