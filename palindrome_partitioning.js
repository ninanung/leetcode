/**
 * @param {string} s
 * @return {string[][]}
 */
/*var partition = function(s) {
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
};*/

var partition = function(s) {
    const popArray = (str, startIndex, partition, result) => {
        // sanity check
        if (startIndex === str.length) {
            result.push(partition.slice());
            return;
        }
        // core logic
        for (let i = startIndex; i < str.length; i++) {
            let subStr = str.slice(startIndex, i + 1);
            if (!checkPalin(subStr)) {
                continue;
            }

            partition.push(subStr);
            popArray(str, i + 1, partition, result);
            partition.pop();
        }
    }
    
    if(s.length === 0) return [];
    if(s.length === 1) return [[s]];
    
    const result = [];
    popArray(s, 0, [], result)
    return result
};

var checkPalin = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}