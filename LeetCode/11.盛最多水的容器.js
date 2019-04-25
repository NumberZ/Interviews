/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let l = 0,
    len = height.length - 1;
  while (l < len) {
    max = Math.max(max, (len - l) * Math.min(height[l], height[len]));
    if (height[l] > height[len]) {
      len--;
    } else {
      l++;
    }
  }
  return max;
};
