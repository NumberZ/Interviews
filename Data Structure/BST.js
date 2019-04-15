class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      const node = new Node(value);
      this.left = node;
      return this.left;
    }
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value);
      }
      const node = new Node(value);
      this.right = node;
      return this.right;
    }
  }

  contains(value) {
    return !!this.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);
    const parent = this.findParent(value);
    if (!nodeToRemove) {
      throw new Error('item not found in the tree');
    }
    // 如果是叶子节点
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.value = null;
      }
    } else if (nodeToRemove.left && node.right) {
      // 如果被删除的节点有两个子节点
      // 找到下一个较大的节点
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode.value !== nodeToRemove.right.value) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.value = nextBiggerNode.value;
      } else {
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.right = nodeToRemove.right.right;
      }
    } else { 
      // 如果被删除的节点只有一个子节点
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        if (parent.left && parent.left.value === nodeToRemove.value) { 
          parent.left = childNode;
        }
        if (parent.right && parent.right.value === nodeToRemove.value) { 
          parent.right = childNode;
        }
      }
    }
  }

  removeChild(nodeToRemove) {
    if (this.left && this.left.value === nodeToRemove.value) {
      this.left = null;
      return true;
    }
    if (this.rigth && this.right.value === nodeToRemove.value) { 
      this.right = null;
      return true;
    }
    return false;
  }
  find(value) {
    if (this.value === value) return this;
    if (value < this.value) return this.left.find(value);
    if (value > this.value) return this.right.find(value);
    return null;
  }

  findParent(value) {
    if (this.value === value) return null;
    if (value < this.value) {
      if (this.left.value === null) return null;
      if (this.left.value === value) return this;
      return this.left.findParent(value);
    } else if (value > this.value) {
      if (this.right.value === null) return null;
      if (this.right.value === value) return this;
      return this.right.findParent(value);
    }
  }

  findMin() {
    if (!this.left) { 
      return this;
    }
    return this.left.findMin();
  }

  inOrder() {
    let arr = [];
    if (this.left) { 
      arr = arr.concat(this.left.inOrder());
    }
    arr.push(this.value);
    if (this.right) { 
      arr = arr.concat(this.right.inOrder());
    }
    return arr;
  }

  preOrder() { 
    let arr = [];
    arr.push(this.value);
    if (this.left) { 
      arr.concat(this.left.preOrder());
    }
    if (this.right) { 
      arr.concat(this.right.preOrder());
    }
  }
}

class BST {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    return this.root.insert(value);
  }

  contains(value) {
    return this.root.contains(value);
  }

  remove(value) {
    return this.root.remove(parent, value);
  }

  inOrder() { 
    return this.root.inOrder();
  }

  preOrder() { 
    return this.root.preOrder();
  }
}


const tree = new BST();
const data = [1, 3, 8, 10, 6, 4, 7, 13, 14];
for (let i = 0; i < data.length; i++) { 
  tree.insert(data[i]);
}
console.log(tree.root);
console.log(tree.inOrder());