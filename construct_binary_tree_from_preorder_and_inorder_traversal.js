/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 /* 이 방법을 사용해 보았으나, 시간과 메모리를 너무 많이 사용함. 시간복잡도는 같을 것 같으나 함수의 사용 때문일지?
var buildTree = function(preorder, inorder) {
    return makeNewNode(preorder, inorder);
};

var makeNewNode = function(preorder, inorder) {
    if(preorder.length === 0 && inorder.length === 0) return null;
    const value = preorder[0];
    const index = inorder.indexOf(value);
    let root = new TreeNode(value);
    root.left = makeNewNode(preorder.slice(1, 1 + index), inorder.slice(0, index));
    root.right = makeNewNode(preorder.slice(index + 1, preorder.length), inorder.slice(index + 1, preorder.length))
    return root;
};
*/

// 이 방법을 찾았는데 아마 가장 좋은 방법일 것 같다.
var buildTree = function(preorder, inorder) {
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null; // sanity check

        var value = preorder[p1],           // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - i1,             // count nodes in left subtree
            root  = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};