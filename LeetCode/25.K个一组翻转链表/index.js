/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] k个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (49.51%)
 * Total Accepted:    9.4K
 * Total Submissions: 18.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。
 * 
 * 示例 :
 * 
 * 给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 说明 :
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * \
 *  给定这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// const List = require('./List');

// const list = new List([1, 2, 3, 4, 5]);
var reverseKGroup = function (head, k) {
  if (head === null) { return null };
  if (k <= 0) return head;
  let cur = head;
  let copy = head;
  let n = k;
  while (--k) {
    if (!cur|| !cur.next) return head;
    cur = cur.next;
  }
  const nextHead = cur.next;
  head = reverseK(head, n);
  copy.next = reverseKGroup(nextHead, n);
  return head;
};


function reverseK(cur, k) {
  let pre = null;
  while (cur && k > 0) { 
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    k--;
  }
  return pre;
}
// // console.log(reverseK(list.head, 2));
// console.log(List.log(reverseKGroup(list.head, 3)));
// 分
//递归 + 翻转