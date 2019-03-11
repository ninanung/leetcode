// https://leetcode.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var deadOrAlive = function(board, y, x) {
    var around = [-1, 0, 1]
    var maxY = board.length
    var maxX = board[0].length
    var cell = board[y][x]
    var howManyAlive = 0
    for(let i = 0; i < around.length; i++) {
        for(let j = 0; j < around.length; j++) {
            var otherY = y + around[i]
            var otherX = x + around[j]
            if(0 <= otherY && otherY < maxY && 0 <= otherX && otherX < maxX && !(around[i] === 0 && around[j] === 0)) {
                if(board[otherY][otherX] === 1) {
                    howManyAlive++
                }
            }
        }
    }
    if(cell === 0 && howManyAlive === 3) return 1
    if(cell === 1 && (howManyAlive === 2 || howManyAlive === 3)) return 1
    else return 0
};

var gameOfLife = function(board) {
    var newCells = []
    for(let y = 0; y < board.length; y++) {
        var newLine = []
        for(let x = 0; x < board[y].length; x++) {
            newLine.push(deadOrAlive(board, y, x))
        }
        newCells.push(newLine)
    }
    for(let y = 0; y < board.length; y++) {
        for(let x = 0; x < board[y].length; x++) {
            board[y][x] = newCells[y][x]
        }
    }
};