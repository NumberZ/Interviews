function ListNode(val) {
  this.val = val;
  this.next = null;
}

class List {
  constructor(arr) {
    this.head = this.arrToList(arr);
  }
  arrToList(arr) {
    if (arr.length <= 0) return null;
    const node = new ListNode(arr.shift());
    node.next = this.arrToList(arr);
    return node;
  }

  static log(head) {
    const result = [];
    let cur = this.head || head;
    while (cur) {
      result.push(cur.val);
      cur = cur.next;
    }
    return result;
  }
}

module.exports = List;
