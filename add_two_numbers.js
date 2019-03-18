// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = [];
    let standard = [];
    if(l1.length < l2.length) {
        standard = l2.slice();
    } else {
        standard = l1.slice();
    }
    let plus = 0;
    for(let i = 0; i < standard.length; i++) {
        if(l1[i] && l2[i]) {
            if((l1[i] + l2[i] + plus) >= 10) {
                result.push((l1[i] + l2[i] + plus) % 10)
                plus = 1;
            } else {
                result.push(l1[i] + l2[i] + plus)
                plus = 0;
            }
        } else {
            result.push(standard[i] + plus);
            plus = 0;
        }
    }
    if(plus) {
        result.push(plus);
    }
    return result;
};