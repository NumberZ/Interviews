/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.20%)
 * Total Accepted:    36.5K
 * Total Submissions: 150.4K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   let result = '';
//   const len = s.length;
//   const isPalindrome = str => {
//     for (let i = 0, j = str.length - 1; i <= j; i++,j--) {
//       if (str[i] !== str[j]) return false;
//     }
//     return true;
//   };
//   for (let i = 0; i < len; i++) {
//     if (result.length > len - i) break;
//     for (let j = 0; j < len; j++) {
//       const substr = s.substring(i, j + 1);
//       if (isPalindrome(substr)) {
//         result = result.length < substr.length ? substr : result;
//       }
//     }
//   }
//   return result;
// };

var longestPalindrome = function (s) { 
  
}
