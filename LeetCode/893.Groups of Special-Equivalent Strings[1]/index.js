/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  const dic = {};
  for (let i = 0; i < A.length; i++) {
      let odd = [];
      let even = [];
      for (let j = 0; j < A[i].length; j++) {
          if (j % 2 === 0) {
              even.push(A[i][j])
          } else {
              odd.push(A[i][j]);
          }
      }
      odd.sort();
      even.sort();
      if (!dic[odd.join() + '#' + even.join()]) {
          dic[odd.join() + '#' + even.join()] = 1;
      }
  }
  return Object.keys(dic).length
};