// https://leetcode.com/problems/longest-common-prefix/submissions/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let standard = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let count = 0;
        let prefix = ''
        while(standard[count] && strs[i][count]) {
            if(standard[count] === strs[i][count]) {
                prefix += standard[count];
                count++;
            } else {
                if(!prefix) return prefix;
                else break;
            }
        }
        standard = prefix
    }
    return standard;
};