/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    function recursive(x, y) {
        if(x < 0 || y < 0 || x > board[0].length - 1 || y > board.length - 1) return ;
        if(board[y][x] === '#' || board[y][x] === 'X') return ;
        if(board[y][x] === 'O') {
            board[y][x] = '#';
            recursive(x, y - 1);
            recursive(x + 1, y);
            recursive(x, y + 1);
            recursive(x - 1, y);
        }
    }
    
    if(board.length === 0) return [];
    
    for(let i = 0; i < board.length; i++) {
        if(board[i][0] === 'O') recursive(0, i);
        if(board[i][board[0].length - 1] === 'O') recursive(board[0].length - 1, i);
    }
    
    for(let i = 0; i < board[0].length; i++) {
        if(board[0][i] === 'O') recursive(i, 0);
        if(board[board.length - 1][i] === 'O') recursive(i, board.length - 1);
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'O') board[i][j] = 'X';
            if(board[i][j] === '#') board[i][j] = 'O';
        }
    }
};