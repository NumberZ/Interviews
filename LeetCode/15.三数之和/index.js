/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const s = nums[i] + nums[j] + nums[k];
        if (s === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k + 1]) {
            k++;
          }
        } else if (s > 0) {
          k = k - 1;
        } else if (s < 0) {
          j = j + 1;
        }
      }
    }
  }
  return result;
};
