// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var recursive = function(string, result, n, stack) {
    if(!n && stack.length === 0) result.push(string);
    else {
        for(let char of '\(\)') {
            if(char === '\(' && n) recursive(string + '\(', result, n - 1, stack + '\)');
            if(char === '\)' && stack.length) recursive(string + '\)', result, n, stack.slice(0, stack.length - 1))
        }
    }
};

var generateParenthesis = function(n) {
    if(!n) return [""];
    const result = [];
    let string = '\(';
    let stack = '\)';
    recursive(string, result, n - 1, stack);
    return result;
};