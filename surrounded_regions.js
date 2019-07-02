/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    function recursive(x, y) {
        if(board[y][x] === 'O') {
            board[y][x] = '#';
            return ;
        }
        if(board[y][x] === '#' || board[y][x] === 'X') return ;
    }
    
    for(let i = 0; i < board.length; i++) {
        if(board[i][0] === 'O') recursive();
        if(board[i][board.length - 1] === 'O') recursive();
    }
    
    for(let i = 0; i < board[0].length; i++) {
        if(board[0][i] === 'O') recursive();
        if(board[board[0].length - 1][i] === 'O') recursive();
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'O') board[i][j] = 'X';
            if(board[i][j] === '#') board[i][j] = 'O';
        }
    }
};