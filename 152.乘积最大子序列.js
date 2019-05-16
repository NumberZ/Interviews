/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const max = [];
  const min = [];
  let result = (max[0] = min[0] = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    max[i] = Math.max(
      nums[i],
      Math.max(nums[i] * max[i - 1], nums[i] * min[i - 1])
    );
    min[i] = Math.min(
      nums[i],
      Math.min(nums[i] * min[i - 1], nums[i] * max[i - 1])
    );
    result = Math.max(result, max[i]);
  }
  return result;
};
