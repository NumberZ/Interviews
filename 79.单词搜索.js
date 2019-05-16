/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0, word, board)) {
          return true;
        }
      }
    }
  }
  return false;

  function dfs(i, j, index, word, board) {
    if (index === word.length) return true;
    if (i < 0 || i >= board.length) return false;
    if (j < 0 || j >= board[0].length) return false;
    if (board[i][j] !== word[index]) return false;
    const char = board[i][j];
    board[i][j] = '*';
    const ans =
      dfs(i + 1, j, index + 1, word, board) ||
      dfs(i - 1, j, index + 1, word, board) ||
      dfs(i, j + 1, index + 1, word, board) ||
      dfs(i, j - 1, index + 1, word, board);
    board[i][j] = char;
    return ans;
  }
};
