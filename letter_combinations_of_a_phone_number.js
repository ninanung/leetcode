// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
let numbers = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
]);

let recursive = function(out, digits, result) {
    if(digits.length === 0) {
        if(!out) return;
        result.push(out);
    } else {
        for(let alpha of numbers.get(digits[0])) {
            recursive(out + alpha, digits.slice(1, digits.length), result);
        }
    }
}

var letterCombinations = function(digits) {
    const result = [];
    recursive('', digits, result)
    return result;
};