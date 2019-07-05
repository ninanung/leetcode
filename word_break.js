/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    function recursive(start, table) {
        if(start === s.length) return true;
        if(table[start] === false) return false;
        if(table[start] === true) return true;
        let returnBool = false;
        for(let word of wordDict) {
            const end = start + word.length;
            if(end > s.length) continue;
            if(s.slice(start, end) === word) {
                if(recursive(end, table)) returnBool = true;
            }
        }
        table[start] = returnBool;
        return returnBool;
    }
    let table = [];
    return recursive(0, table);
};