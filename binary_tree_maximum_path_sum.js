/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    function getMax(node) {
        if(!node) return 0;
        const left = getMax(node.left);
        const right = getMax(node.right);
        max = Math.max(max, node.val + left + right);
        return Math.max(0, node.val + left, node.val + right);
    }
    let max = -Number.MAX_VALUE;
    getMax(root);
    return max
};