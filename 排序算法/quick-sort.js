function QuickSort(nums) {
  if (nums.length <= 1) return nums;
  const pivot = nums.shift();
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return QuickSort(left).concat([pivot], QuickSort(right));
}
// 平均时间复杂度 nlogn
//
// 1.pick个数字 作为pivot 一般调用nums.shift()取第一个数字
// 2.以pivot这个为基准 分别排序左右子数组
// 3.递归调用左右两个子数组,合并中间的数组

// console.log(QuickSort([2, 3, 45, 3, 1, 3, 5, 9, 0]));

// function QuickSortInPlace(nums, low, high) {
//   if (low > high) return nums;
//   const j = partition(low, high);
//   QuickSortInPlace(nums, 0, )
// }

function QuickSortInPlace(nums) {
  const sort = (nums, low, high) => {
    const parititionArray = (low, high) => {
      const swap = (leftIndex, rigthIndex) => {
        const temp = nums[leftIndex];
        nums[leftIndex] = nums[rigthIndex];
        nums[rigthIndex] = temp;
      };
      const pivot = nums[high];
      let partitionIndex = low;
      for (let i = low; i < high; i++) {
        if (nums[i] < pivot) {
          swap(i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(partitionIndex, high);
      return partitionIndex;
    };
    if (low < high) {
      const partitionIndex = parititionArray(low, high);
      sort(nums, low, partitionIndex - 1);
      sort(nums, partitionIndex + 1, high);
    }
  };
  sort(nums, 0, nums.length - 1);
  return nums;
}

module.exports = {
  QuickSort,
  QuickSortInPlace
};
