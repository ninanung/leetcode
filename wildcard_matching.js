// https://leetcode.com/problems/wildcard-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array(sLen + 1).fill(0).map(x => new Array(pLen + 1).fill(0));
    dp[0][0] = true;

    for (let i = 1; i <= pLen; i++) {
        if (p[i - 1] === "*") {
            dp[0][i] = dp[0][i - 1];
        }
    }
    
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === "*") {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }
    return !!dp[sLen][pLen];
};