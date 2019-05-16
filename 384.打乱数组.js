/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this._nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this._nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const array = [...this._nums];
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const randomItem = array[randomIndex];

    array[randomIndex] = array[i];
    array[i] = randomItem;
  }
  return array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const so = new Solution([1, 2, 3]);
console.log(so.shuffle());
console.log(so.reset());