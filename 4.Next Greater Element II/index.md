最初的想法比较简单, 构造了一个新的数组来查找. 但是速度太慢.
```js
var nextGreaterElements = function(nums) {
    const result = [];
    const getGreater = (i, j, arr) => {
        const newArr = arr.slice(i).concat(arr.slice(0, i));
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > j) return newArr[i];
        }
        return -1;
        
    }
    for (let i = 0; i < nums.length; i++) {
        result.push(getGreater(i, nums[i], nums));
    }
    return result;
}
```
题目的关键点在于是否可以充分利用栈这个数据结构.

而栈存储的为数组的下标