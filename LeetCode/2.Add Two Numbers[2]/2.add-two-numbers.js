/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.29%)
 * Total Accepted:    81.4K
 * Total Submissions: 252.1K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function bs(l1, l2, carry) {
    if (!l1 && !l2 && !carry) return null;
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + carry;
    carry = sum >= 10 ? 1 : 0;
    const result = new ListNode(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    result.next = bs(l1, l2, carry);
    return result;
  }
  return bs(l1, l2, 0);
};
