// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var recursive = function(grid, table, x=0, y=0) {
    if(x > grid[0].length - 1 || y > grid.length - 1) return null;
    if(x === grid[0].length - 1 && y === grid.length - 1) return grid[y][x];
    if(table[y][x] !== null) return table[y][x];
    const value = grid[y][x];
    const right = recursive(grid, table, x + 1, y);
    const under = recursive(grid, table, x, y + 1);
    if(right === null) {
        table[y][x] = value + under;
        return value + under;
    }
    else if(under === null) {
        table[y][x] = value + right;
        return value + right;
    }
    else {
        const small = right < under ? right : under;
        table[y][x] = value + small;
        return value + small;
    }
}

var minPathSum = function(grid) {
    if(grid.length === 0) return 0;
    if(grid[0].length === 0) return 0;
    let table =[]
    for(let i = 0; i < grid.length; i++) {
        let array = [];
        for(let j = 0; j < grid[0].length; j++) {
            array.push(null);
        }
        table.push(array);
    }
    return recursive(grid, table);
};