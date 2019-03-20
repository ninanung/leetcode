// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var checkDuplicated = function(characters) {
    const elements = [];
    let duplicated = false;
    for(let i = 0; i < characters.length; i++) {
        if(!elements.length) elements.push(characters[i]);
        else {
            let same = false;
            for(let element of elements) {
                if(characters[i] === element) {
                    same = true;
                    duplicated = true;
                }
            }
            if(!same) elements.push(characters[i]);
        }
    }
    return {
        elements,
        duplicated,
    }
}

var lengthOfLongestSubstring = function(s) {
    const checked = checkDuplicated(s);
    const maxLength = checked.elements.length;
    if(!checked.duplicated) return s.length;
    if(maxLength === 1) return maxLength; 
    else {
        
    }
};