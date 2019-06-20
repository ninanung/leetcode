/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return root;
    if(root.left === null && root.right === null) return root;
    const queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const length = queue.length;
        const nodes = queue.splice(0, length);
        for(let i = 0; i < length; i++) {
            let node = nodes.shift()
            if(nodes.length > 0) node.next = nodes[0];
            else node.next = null;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return root;
};