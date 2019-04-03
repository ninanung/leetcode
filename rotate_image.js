// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    /*const copy = [];
    for(let i in matrix) {
        const array = []
        for(let j = matrix[i].length - 1; j >= 0; j--) {
            array.push(matrix[j][i])
        }
        copy.push(array);
    }
    for(let i in copy) {
        matrix[i] = copy[i]
    }*/
    const copy = matrix.slice();
    for(let i in copy) {
        const array = []
        for(let j = copy[i].length - 1; j >= 0; j--) {
            array.push(copy[j][i])
        }
        matrix[i] = array
    }
};