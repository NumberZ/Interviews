const RED = true;
const BLACK = false;

class Node { 
  constructor(key, value, n, color) { 
    this.key = key;
    this.value = value;
    this.N = n;
    // 指向该节点的链接颜色
    this.color = color;
  }
}
class RedBlackBST { 
  root;
  _isRed(node) { 
    if (node === null) return false;
    return node.color === RED;
  }

  // 左旋转 将红色的右链接转化为左链接
  rotateLeft(node) { 
    
  }
}