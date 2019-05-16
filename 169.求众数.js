/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result === nums[i]) {
      count++;
    } else {
      count--;
      if (count === 0) {
        result = nums[i + 1];
      }
    }
  }
  return result;
};
