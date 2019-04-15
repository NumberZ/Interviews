var nextGreaterElements = function(nums) {
  const stack = [];
  const length = nums.length;
  const result = [...new Array(length)].map(() => -1);
  for (let i = 0; i < length * 2; i++) {
    const index = i % length;
    while (stack.length !== 0 && nums[index] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[index];
    }
    if (index < length) stack.push(index);
  }
  return result;
};

console.log(nextGreaterElements([3, 1, 1, 2]));
console.log(nextGreaterElements([1, 2, 3, 4, 5]));
