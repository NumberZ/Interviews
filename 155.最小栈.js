/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.minStack.length === 0) {
    this.minStack.push(x);
  } else {
    if (this.minStack[this.minStack.length - 1] >= x) {
      this.minStack.push(x);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  if (this.minStack[this.minStack.length - 1] === item) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * 思路:
 * 初始化两个栈: stack和minStack
 * stack记录正常栈的操作
 * minStack记录每个栈操作后的正常栈中的最小值
 */