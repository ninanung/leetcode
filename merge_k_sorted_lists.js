/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*var mergeKLists = function(lists) {
    function recursive(origin, compare) {
        if(origin === null && compare === null) return null;
        if(origin === null) {
            let newNode = new ListNode(compare.val);
            newNode.next = recursive(origin, compare.next);
            return newNode;
        } 
        if(compare === null) {
            let newNode = new ListNode(origin.val);
            newNode.next = recursive(origin.next, compare);
            return newNode;            
        }
        if(origin.val > compare.val) {
            let newNode = new ListNode(compare.val);
            newNode.next = recursive(origin, compare.next);
            return newNode;
        } else {
            let newNode = new ListNode(origin.val);
            newNode.next = recursive(origin.next, compare);
            return newNode;
        }
    }
    
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    let result = null
    for(let list of lists) {
        result = recursive(result, list);
    }
    return result;
};*/

var mergeKLists = function(lists) {
    function recursive(origin, compare) {
        if(origin === null && compare === null) return null;
        if(origin === null) {
            compare.next = recursive(origin, compare.next);
            return compare;
        } 
        if(compare === null) {
            origin.next = recursive(origin.next, compare);
            return origin;         
        }
        if(origin.val > compare.val) {
            compare.next = recursive(origin, compare.next);
            return compare;
        } else {
            origin.next = recursive(origin.next, compare);
            return origin; 
        }
    }
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    
    while(lists.length > 1) {
        lists.push(recursive(lists.shift(), lists.shift()));
    }
    return lists[0];
};