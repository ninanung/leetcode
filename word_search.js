// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(matrix, word) {
    var wordLength = word.length,
        i,
        j;
    
    word = word.split("");
    
    var verify = function(row, col, matrix, path){
        if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] != word[path] || path > wordLength)
            return false;
        // Up to this point, we found the char we were looking for
        path++;
        matrix[row][col] = '#';
        
        //If we find the word
        if(path === wordLength)
            return true;
        //Up
        if(verify(row - 1, col, matrix, path))
            return true;
        //Right
        if(verify(row, col + 1, matrix, path))
            return true;
        //Down
        if(verify(row + 1, col, matrix, path))
            return true;
        //Left
        if(verify(row, col - 1, matrix, path))
            return true;
        // Backtrack
        matrix[row][col] = word[--path];
        return false;
    };
    
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[i].length; j++){
            if(verify(i, j, matrix, 0))
                return true;
        }
    }
    
    return false;
};