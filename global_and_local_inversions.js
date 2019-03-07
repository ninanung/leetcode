// https://leetcode.com/problems/global-and-local-inversions/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
    var gi = 0
    var li = 0
    var len = A.length
    var loop = len - 1
    for(let i = 0; i < loop; i++) {
        if(A[i] > A[i+1]) {
            li++
        }
        for(let j = len - 1; j > i; j--) {
            if(A[i] > A[j]) {
                gi++
            }
        }
    }
    if(li === gi) return true
    else return false
};