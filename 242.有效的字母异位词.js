/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const hash = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 0;
    }
    if (hash[t[i]] === undefined) {
      hash[t[i]] = 0;
    }
    hash[s[i]]++;
    hash[t[i]]--;
  }
  for (let i in hash) {
    if (hash[i] !== 0) return false;
  }
  return true;
};
