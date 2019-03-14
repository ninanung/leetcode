// https://leetcode.com/problems/broken-calculator/

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    var count = 0;
    var newY = Y;
    while(newY > X) {
        if(newY % 2 === 1) {
            newY++;
        } else {
            newY /= 2
        }
        count++
    }
    return count + (X - newY);
};