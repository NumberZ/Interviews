/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.17%)
 * Total Accepted:    43.6K
 * Total Submissions: 83.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
  // function merge(l1, l2) {
  //   if (!l1) {
  //     return l2;
  //   }
  //   if (!l2) {
  //     return l1;
  //   }
  //   const l3 = new ListNode();
  //   const v1 = l1.val;
  //   const v2 = l2.val;
  //   if (v1 <= v2) {
  //     l3.val = v1;
  //     l3.next = merge(l1.next, l2);
  //   } else {
  //     l3.val = v2;
  //     l3.next = merge(l1, l2.next);
  //   }
  //   return l3;
  // }
  // return merge(l1, l2)
  
  const l3 = new ListNode();
  let cur = l3;
  while (l1 !== null && l2 !== null) { 
    if (l1.val < l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else { 
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }
  if (l1 === null) { 
    cur.next = l2;
  }
  if (l2 === null) { 
    cur.next = l1;
  }
  return l3.next;
};
/**
 * 第一次用的递归
 * 推荐的解法比较有意思
 */