// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
/*var makeReverse = function(s) {
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
    let substring = '';
    let max = 0;
    const reverse = makeReverse(s);
    const length = s.length;
    let table = makeTable(s);
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(s[i] === reverse[j]) {
                if(i === 0 || j === 0) {
                    table[i][j] = 1;
                    if(max === 0) {
                        substring = s[i]
                    }
                } else {
                    table[i][j] = table[i - 1][j - 1] + 1;
                    const sliced = s.slice(i + 1 - table[i][j], i + 1)
                    if(sliced === makeReverse(sliced) && sliced) {
                        if(sliced.length > max) {
                            substring = sliced
                            max = substring.length
                        }
                    }
                }
            }
        }
    }
    return substring;
};*/

var longestPalindrome = function(s) {
    let substring = '';
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while(left >= 0 && right < s.length) {
            let changed = false;
            if(left === i && s[right + 1] === s[i]) {
                right++;
                changed = true;
            }
            if(s[left - 1] && s[right + 1] && s[left - 1] === s[right + 1]) {
                left--;
                right++;
                changed = true;
            }
            if(!changed) break;
        }
        const sliced = s.slice(left, right + 1);
        if(sliced.length > max) {
            max = right - left + 1;
            substring = sliced;
        }
    }
    return substring;
}