// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */

/*사실 이 문제는 parseInt를 사용하면 놀라울 정도로 쉽게 풀 수 있고, 문제를 보자마자 나도 그걸 떠올렸지만 문제 출제자가 이걸 의도한 건 아닌 것 같아서 각주처리를 한다.
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};*/
var myAtoi = function(str) {
    let result = '';
    for(let i = 0; i < str.split(' ').length; i++) {
        if(str.split(' ')[i] !== '') {
            str = str.split(' ')[i];
            i = str.split(' ').length;
        }
    }
    for(let i = 0; i < str.length; i++) {
        let isbreak = false;
        let char = str[i];
        if(char !== '-' && char !== '+' && isNaN(char * 1)) isbreak = true;
        if(!isNaN(char * 1)) result += char;
        if(char === '-' || char === '+') {
            if(!result) result += char;
            else isbreak = true;
        }
        if(isbreak) i = str.length
    }
    result *= 1;
    if(isNaN(result)) return 0;
    if(result > 2147483647) return 2147483647;
    else if(result < -2147483648) return -2147483648
    return result;
}