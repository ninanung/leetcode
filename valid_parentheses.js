// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = '';
    for(let char of s) {
        if(char === '\(') stack += '\)';
        else if(char === '\[') stack += '\]';
        else if(char === '\{') stack += '\}'
        else {
            if(char !== stack[stack.length - 1]) return false;
            else stack = stack.slice(0, stack.length - 1)
        }
    }
    if(stack.length) return false;
    return true;
};