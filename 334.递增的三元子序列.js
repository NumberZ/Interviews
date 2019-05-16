/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false;
  let min = Number.MAX_VALUE;
  let mid = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    } else if (nums[i] > min && mid > nums[i]) {
      mid = nums[i];
    } else if (nums[i] > mid) {
      return true;
    }
  }
  return false;
};

/**
 * 思路:
 * min: 代表三个数中最小的一个
 * mid: 代表三数中中间的一个
 * 遍历数组先找到前两个数 再着
 */
