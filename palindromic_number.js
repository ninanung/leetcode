// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let reverse = 0;
    let original = x;
    while(x !== 0) {
        reverse *= 10;
        reverse += x % 10;
        x = parseInt(x/10);
    }
    if(original === reverse) return true;
    else return false;
};