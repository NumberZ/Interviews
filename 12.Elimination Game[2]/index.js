/*
输入:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6
输出:
6
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let array = [...new Array(n)].map((v, i) => i + 1);
  let count = 0;
  const HeadClear = arr => {
    return arr.filter((i, index) => {
      return index % 2 === 1;
    });
  };

  const EndClear = arr => {
    const len = arr.length;
    if (len % 2 === 1) return HeadClear(arr);
    return arr.filter((i, index) => {
      return index % 2 === 0;
    });
  };

  while (array.length !== 1) {
    count % 2 === 0 ? (array = HeadClear(array)) : (array = EndClear(array));
    count++;
  }
  return array[0];
};

console.log(lastRemaining(100000000));
