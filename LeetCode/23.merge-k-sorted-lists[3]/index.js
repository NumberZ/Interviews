/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (43.03%)
 * Total Accepted:    15.6K
 * Total Submissions: 35.5K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function mergeTwoLists(l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    const l3 = new ListNode();
    if (l1.val <= l2.val) {
      l3.val = l1.val;
      l3.next = mergeTwoLists(l1.next, l2);
    } else {
      l3.val = l2.val;
      l3.next = mergeTwoLists(l1, l2.next);
    }
    return l3;
  }
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);

  const mid = Math.floor(lists.length / 2);
  return mergeTwoLists(
    mergeKLists(lists.slice(0, mid)),
    mergeKLists(lists.slice(mid))
  );
};
