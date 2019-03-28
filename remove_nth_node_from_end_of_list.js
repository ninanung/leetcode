// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {  
    let count = 0;
    if(head.next === null || head === null) return null;
    let linkPointer = {
        val: null,
        next: head,
    }
    let endPointer = head;
    while(endPointer !== null) {
        endPointer = endPointer.next;
        if(count >= n) linkPointer = linkPointer.next;
        count++;
    }
    if(count === n) return head.next
    else linkPointer.next = linkPointer.next.next;
    return head;
};