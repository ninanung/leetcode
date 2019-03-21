// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
/*var checkDuplicated = function(characters) {
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
    let maxLength = checked.elements.length;
    if(!checked.duplicated) return s.length;
    if(maxLength === 1) return maxLength;
    else {
        while(maxLength > 0) {
            for(let i = s.length; i - maxLength >= 0; i--) {
                if(!checkDuplicated(s.slice(i - maxLength, i)).duplicated) return maxLength;
            }
            maxLength--;
        }
    }
    return maxLength;
};*/

var lengthOfLongestSubstring = function(s) {
    var start = 0, maxLen = 0;
    var map = new Map();
    for(var i = 0; i < s.length; i++) {
        var ch = s[i];
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
    return maxLen;
};