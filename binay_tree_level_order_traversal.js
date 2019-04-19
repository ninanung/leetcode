// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const queue = [];
    const layers = [];
    queue.push(root);
    while(queue.length > 0) {
        const length = queue.length;
        const layer = [];
        for(let count = 0; count < length; count++) {
            const node = queue.shift();
            layer.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        layers.push(layer);
    }
    return layers;
};