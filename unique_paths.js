// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function recursive(m, n, result, x=1, y=1) {
    if(x > m || y > n) return 0;
    if(result[y - 1][x - 1]) return result[y - 1][x - 1];
    if(x === m && y === n) return 1;
    const path = recursive(m, n, result, x + 1, y) + recursive(m, n, result, x, y + 1);
    result[y - 1][x - 1] = path;
    return path;
}

var uniquePaths = function(m, n) {
    let result = []
    for(let i = 0; i < n; i++) {
        let array = [];
        for(let j = 0; j < m; j++) {
            array[j] = 0;
        }
        result[i] = array;
    }
    if(!m || !n) return 0;
    if(m === 1 || n === 1) return 1;
    return recursive(m, n, result);
};