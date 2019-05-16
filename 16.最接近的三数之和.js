/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closeSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(closeSum - target)) {
        closeSum = sum;
      }
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return target;
      }
    }
  }
  return closeSum;
};
