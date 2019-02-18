class Node {
  constructor(key, value, n) {
    // 键
    this.key = key;
    // 值
    this.value = value;
    // 以该节点为根的子树中的结点总数
    this.n = n;
    //
    this.left = null;
    this.right = null;
  }
}

class BST {
  root;

  size() {
    return this._size(this.root);
  }

  _size(node) {
    if (node === null) return 0;
    return node.n;
  }
  getValue(key) {
    return this._getValue(this.root, key);
  }
  _getValue(node, key) {
    if (node === null) return;
    if (node.key === key) return node.value;
    if (key > node.key) {
      return this._getValue(node.right, key);
    } else {
      return this._getValue(node.left, key);
    }
  }
  putNode(key, value) {
    this.root = this._putNode(this.root, key, value);
  }

  _putNode(node, key, value) {
    if (node === null) return new Node(key, value, 1);
    if (node.key === key) node.value = value;
    if (key > node.key) {
      node.right = this._putNode(node.right, key, value);
    } else {
      node.left = this._putNode(node.left, key, value);
    }
    node.n = this.size(node.left) + this.size(node.right) + 1;
    return node;
  }

  min() {
    return this._min(this.root).key;
  }

  _min(node) {
    if (node.left === null) return node;
    return _min(node.left);
  }

}
