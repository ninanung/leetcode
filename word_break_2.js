/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    function recursive(start, table, resultString, result) {
        if(start === s.length) {
            result.push(resultString);
            return true;
        }
        if(table[start] === false) return false;
        let returnBool = false;
        for(let word of wordDict) {
            const end = start + word.length;
            if(end > s.length) continue;
            if(s.slice(start, end) === word) {
                if(recursive(end, table, resultString ? resultString + " " + word : resultString + word, result)) returnBool = true;
            }
        }
        table[start] = returnBool;
        return returnBool;
    }
    let table = [];
    let result = [];
    recursive(0, table, "", result);
    return result;
};