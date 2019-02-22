/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3} root 
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const r = new TreeNode(1);
var binaryTreePaths = function(root) {
  const result = [];
  const stack = [];
  if (!root) return [];
  const dfs = node => {
    if (node.left === null && node.right === null) {
      result.push([...stack]);
    }
    node.left && dfs(node.left);
    node.right && dfs(node.right);
    stack.pop();
  };
  dfs(root);
  return result.map(arr => {
    return arr.reduce((pre, cur) => {
      return pre + '->' + cur;
    });
  });
};
console.log(binaryTreePaths(r));
