/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 */

 /**
  * @param {number} n
  * @return {number}
  */
var numTree = function(n) {
  var arr = new Array(n + 1).join(',').split(',').map(function(item) {
    return 0;
  });
  arr[0] = arr[1] = 1;
  for (var i = 2; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      arr[i] += arr[j-1] * arr[i-j];
    }
  }
  return arr[n];
}
