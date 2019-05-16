/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const len = m + n;
  let i = 0;
  let j = 0;
  while (i < len) {
    if (nums1[i] >= nums2[j]) {
      for (let k = len - 1; k > i; k--) {
        nums1[k] = nums1[k - 1];
      }
      nums1[i] = nums2[j];
      j++;
    }
    i++;
  }
  if (j < n) {
    for (let k = len - 1; n > j; n--) {
      nums1[k] = nums2[n - 1];
      k--;
    }
  }
};
