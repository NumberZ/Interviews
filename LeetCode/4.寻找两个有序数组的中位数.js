/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const result = nums1.concat(nums2).sort((a, b) => {
    if (a >= b) return 1;
    else return -1;
  });
  const midIndex = (result.length - 1) / 2;
  console.log(result);
  const floor = Math.floor(midIndex);
  if (floor === midIndex) {
    return result[midIndex];
  } else {
    return (result[floor] + result[floor + 1]) / 2;
  }
};

// console.log(
//   findMedianSortedArrays(
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
//     [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]
//   )
// );
