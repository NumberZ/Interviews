/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) { 
  const height = A.length;
  const getHexScore = (arr) => {
      if (!Array.isArray(arr)) return 0;
      return arr.reduceRight((pre, cur, index) => {
          return pre + Math.pow(2, arr.length - 1 - index) * cur;
      }, 0);
  }
  const convertRow = (arr, row) => {
      for (let i = 0; i < arr[row].length; i++) {
          arr[row][i] = arr[row][i] ? 0 : 1;
      }
  }
  
  const convertColumn = (arr, column) => {
      for (let i = 0; i < height; i++) {
          arr[i][column] = arr[i][column] ? 0 : 1;
      }
  }
  
  const getColumn = (arr, column, num) => {
      let result = 0;
      for (let k = 0; k < height; k++) {
          if (arr[k][column] === num) {
              result ++;
          }
      }
      return result;
  }
  for (let i = 0; i < height; i++) {
      if (A[i][0] === 0) {
          convertRow(A, i);
      }
  }
  for (let j = 1; j < A[0].length; j++) {
      if (getColumn(A, j, 0) > getColumn(A,j, 1)) {
          convertColumn(A, j);
      }
  }
  return A.reduce((pre, cur) => {
      return pre + getHexScore(cur)
  }, 0)
};