// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x) {
        result *= 10;
        result += (x % 10);
        x = parseInt(x/10);
    }
    if(Math.pow(2, 31) * -1 > result || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result;
};