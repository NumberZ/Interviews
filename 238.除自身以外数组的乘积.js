/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */
/**
 * 输入: [1,2,3,4]
   输出: [24,12,8,6]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = [];
  let leftMuti = 1;
  let rigthMuti = 1;
  for (let i = 0; i < nums.length; i++) { 
    output[i] = leftMuti;
    leftMuti = leftMuti * nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) { 
    output[j] = output[j] * rigthMuti;
    rigthMuti = rigthMuti * nums[j];
  }
  return output;
};