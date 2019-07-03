/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function popArray(string, begin, result) {
        for(let i = begin; i < string.length; i++) {
            let start = i;
            let end = i + 2;
            while(end <= string.length) {
                if(checkPalin(string.slice(start, end).join(''))) {
                    const newArray = string.slice();
                    const joined = newArray.splice(start, end - start).join('');
                    newArray.splice(start, 0, joined);
                    result.push(newArray);
                    popArray(newArray, start, result)
                    end = string.length + 1;
                }
                end++;
            }
        }
    }
    
    if(s.length === 0) return [];
    if(s.length === 1) return [[s]];
    
    const result = [];
    const baseArray = s.split('');
    result.push(baseArray);
    popArray(baseArray, 0, result)
    return result
};

var checkPalin = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}