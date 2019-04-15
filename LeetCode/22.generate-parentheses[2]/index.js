/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (68.97%)
 * Total Accepted:    19.2K
 * Total Submissions: 27.6K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const path = '';
  const result = [];
  function helper(left, right, path, result) { 
    if (left === 0 && right === 0) { 
      result.push(path);
    }
    if (left > 0) { 
      helper(left - 1, right, path + '(', result);
    }
    if (right > left) { 
      helper(left, right - 1, path + ')', result);
    }
  }
  helper(n, n, path, result);
  return result;
};

