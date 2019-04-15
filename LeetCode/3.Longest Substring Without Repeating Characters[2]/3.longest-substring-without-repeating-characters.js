/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (27.91%)
 * Total Accepted:    75.7K
 * Total Submissions: 271.1K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 *  a b c d e f c
 *  a b c a b c b b
 * a b c abcbb
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length;
  let sets = [];
  let max = 0;
  for (let i = 0, j = 0; j < n; j++) {
    const index = sets.indexOf(s[j]);
    if (index !== -1) {
      sets.splice(0, index + 1);
      i = index + 1;
    }
    sets.push(s[j]);
    max = Math.max(max, sets.length);
  }
  return max;
};
// 思路 字符串窗口滑动
// console.log(lengthOfLongestSubstring('abcabcbb'));
