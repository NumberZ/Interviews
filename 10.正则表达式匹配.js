/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (20.91%)
 * Total Accepted:    10.1K
 * Total Submissions: 47.7K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 *
 *
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const FRONT = -1;
  function myMatch(s, i, p, j) {
    if (j === FRONT) {
      if (i === FRONT) return true;
      else return false;
    }
    if (p[j] === '*') {
      if (i > FRONT && (p[j - 1] === s[i] || p[j - 1] === '.')) {
        if (myMatch(s, i - 1, p, j)) return true;
      }
      return myMatch(s, i, p, j - 2);
    }
    if (p[j] === '.' || p[j] === s[i]) {
      return myMatch(s, i - 1, p, j - 1);
    }
    return false;
  }
  return myMatch(s, s.length - 1, p, p.length - 1);
};

/**
 * 1.判断j=== -1 是否已经匹配完成
 * 2.p[j] 是否为*
 *   若是: p[j-1] === s[i] || p[j-1] === '.'  i-1
 *   若不是 跳过j j-2
 * 3.p[j] === '.' || p[j] === s[i]  递归i-1 j-1
 */

const isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = [...new Array(m + 1)].map(() => {
    return [...new Array(n + 1)];
  });
  dp[0][0] = true;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = false;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j > 1 && p[j - 1] === '*' && dp[0][j - 2];
  }
  for (let i = 1; i <= m; i++) { 
    for (let j = 1; j <= n; j++) { 
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2] || (s[i])
      } else { 
        dp[i][j] = p[j-1] === '.'
      }
    }
  }
};
