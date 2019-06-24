/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        if(s[start] === s[start].toUpperCase() && s[start] === s[start].toLowerCase()) {
            start++;
            continue;
        }
        if(s[end] === s[end].toUpperCase() && s[end] === s[end].toLowerCase()) {
            end--;
            continue;
        }
        if(s[start].toUpperCase() !== s[end].toUpperCase()) {
            return false
        } else {
            start++;
            end--;
            continue;
        }
    }
    return true
};