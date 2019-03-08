// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} S
 * @return {string}
 */
var reverseString = function(splited) {
    var len = splited.length
    var reversed = ''
    for(let i = len - 1; i >= 0; i--) {
        reversed += splited[i]
    }
    return reversed
}

var reverseOnlyLetters = function(S) {
    var withoutDash = ''
    for(let i of S.split('')) {
        if(i.toUpperCase() !== i || i.toLowerCase() !== i) {
            withoutDash += i
        }
    }
    var reversedWithoutDash = reverseString(withoutDash)
    var result = ''
    for(let i = 0, j = 0; i < S.length; i++, j++) {
        if(S[i].toUpperCase() !== S[i] || S[i].toLowerCase() !== S[i]) {
            result += reversedWithoutDash[j]
        } else {
            result += S[i]
            j--
        }
    }
    return result
};