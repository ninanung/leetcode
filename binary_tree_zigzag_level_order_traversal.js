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
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    if(root.left === null && root.right === null) return [[root.val]];
    const queue = [];
    const result = [];
    let layerCount = 0;
    queue.push(root);
    while(queue.length > 0) {
        const length = queue.length;
        const layer = [];
        for(let count = 0; count < length; count++) {
            const node = queue.shift();
            if(layerCount % 2) layer.unshift(node.val)
            else layer.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(layer);
        layerCount++;
    }
    return result;
};