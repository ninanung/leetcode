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
var createNewNode = function() {
    return {
        val: null,
        next: null,
    }
};

var addTwoNumbers = function(l1, l2) {
    let l1node = l1;
    let l2node = l2;
    let newListNode = createNewNode();
    let newNode = newListNode;
    while(l1node || l2node) {
        if(newListNode.val !== null || newListNode.next) {
            if(newNode.next) newNode = newNode.next;
            else {
                newNode.next = createNewNode();
                newNode = newNode.next;
            }
        }
        if(l1node && l2node) {
            if(l1node.val + l2node.val + newNode.val >= 10) {
                newNode.val = newNode.val + l1node.val + l2node.val - 10
                newNode.next = createNewNode();
                newNode.next.val = 1;
            } else {
                newNode.val = newNode.val + l1node.val + l2node.val
            }
        } else {
            if(l1node) {
                if(l1node.val + newNode.val >= 10) {
                    newNode.val = newNode.val + l1node.val - 10
                    newNode.next = createNewNode();
                    newNode.next.val = 1;
                } else newNode.val = newNode.val + l1node.val;
            } else if(l2node) {
                if(l2node.val + newNode.val >= 10) {
                    newNode.val = newNode.val + l2node.val - 10
                    newNode.next = createNewNode();
                    newNode.next.val = 1;
                } else newNode.val = newNode.val + l2node.val;
            }
        }
        if(l1node) l1node = l1node.next;
        if(l2node) l2node = l2node.next;
    }
    return newListNode;
};