/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function popArray(string, stack, result) {
        for(let i = 0; i < string.length; i++) {
            let start = i;
            let end = i + 2;
            while(end <= string.length) {
                if(checkPalin(string.slice(start, end).join(''))) {
                    const newArray = string.slice();
                    const joined = newArray.splice(start, end - start).join('');
                    newArray.splice(start, 0, joined);
                    stack.push(newArray);
                    result.push(newArray);
                }
                end++;
            }
        }
    }
    
    if(s.length === 0) return [];
    if(s.length === 1) return [[s]];
    
    const result = [];
    const stack = [];
    const baseArray = s.split('');
    result.push(baseArray);
    stack.push(baseArray);
    while(stack.length > 0) {
        console.log(stack)
        const stackString = stack[0];
        stack.splice(0, 1);
        popArray(stackString, stack, result);
    }
    return result;
};

var checkPalin = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}