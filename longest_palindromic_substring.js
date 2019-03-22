// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode.com/problems/longest-palindromic-substring/
var makeReverse = function(s) {
    let reverse = '';
    for(let i = s.length-1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse;
}

var makeTable = function(s) {
    const newArray = [];
    const table = [];
    for(let i = 0; i < s.length; i++) {
        newArray.push(0);
    }
    for(let i = 0; i < s.length; i++) {
        table.push(newArray.slice());
    }
    return table;
}

var longestPalindrome = function(s) {
    let max = 0;
    let substring = '';
    const reverse = makeReverse(s);
    const length = s.length;
    let table = makeTable(s);
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(s[i] === reverse[j]) {
                if(i === 0 || j === 0) {
                    table[i][j] = 1;
                } else {
                    table[i][j] = table[i - 1][j - 1] + 1
                }
                if(table[i][j] > max) {
                    substring = s.slice(i - max, i + 1)
                    max = table[i][j];
                }
            }
        }
    }
    return substring;
};