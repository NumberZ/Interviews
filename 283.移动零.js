/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
 */
var moveZeroes = function(nums) {
  let i = 0;
  let j = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) { 
      nums[j] = nums[i];
      j++;
    }
  }
  while (j < nums.length) { 
    nums[j++] = 0;
  }
};
