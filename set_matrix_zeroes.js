// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var r = matrix.length;
    var l = matrix[0].length;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < l; j++) {
            if (matrix[i][j] === 0 && 1 / matrix[i][j] === Infinity) {
                for (var x = 0; x < r; x++) {
                    matrix[x][j] = matrix[x][j] && -0;
                }
                for (var y = 0; y < l; y++) {
                    matrix[i][y] = matrix[i][y] && -0;
                }
            }
        }
    }
};