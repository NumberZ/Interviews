/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (37.49%)
 * Total Accepted:    36.4K
 * Total Submissions: 96.7K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

// 暴力破解
var strStr = function(haystack, needle) {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (nlen === 0) return 0;
  let i = 0;
  let j = 0;
  while (i < hlen && j < nlen) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j === nlen) return i - j;
  return -1;
};

var strStr = function (haystack, needle) {
  function getNext(p) {
    const len = p.length;
    const arr = [...new Array(len)].map(() => -1);
    let j = 0;
    let k = -1;
    while (j < len - 1) {
      if (k === -1 || p[j] === p[k]) {
        k++;
        j++;
        arr[j] = k;
      } else {
        arr[k] = k;
      }
    }
    return arr;
  }
  const hlen = haystack.length;
  const nlen = needle.length;
  const next = getNext(needle);
  if (nlen === 0) return 0;
  let i = 0;
  let j = 0;
  while (i < hlen && j < nlen) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if (j === nlen) return i - j;
  return -1;
}
