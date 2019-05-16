/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  const m = matrix[0].length;
  const n = matrix.length;
  let i = 0;
  let j = m - 1;
  while (i < n && j >= 0) { 
    const cur = matrix[i][j];
    if (cur === target) { 
      return true;
    }
    if (cur > target) {
      j--;
    } else { 
      i++;
    }
  }
  return false;
};

