/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = [...new Array(s.length + 1)].map(() => false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const substr = s.substring(j, i);
      if (dp[j] && wordDict.includes(substr)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
