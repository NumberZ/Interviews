/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  function fn(k, nums) {
    if (k === 0) return;
    const temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    fn(k - 1, nums);
  }
  fn(k, nums);
};
