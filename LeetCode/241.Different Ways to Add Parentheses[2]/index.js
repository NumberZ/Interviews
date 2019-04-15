/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const operators = new Set(['+', '-', '*']);
  const cache = {};
  const diffWays = str => {
    if (cache[str]) return cache[str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
      if (operators.has(str[i])) {
        const lefRes = diffWays(str.substring(0, i));
        const rightRes = diffWays(str.substring(i + 1));
        for (let j = 0; j < lefRes.length; j++) {
          for (let k = 0; k < rightRes.length; k++) {
            switch (str[i]) {
              case '+':
                result.push(lefRes[j] + rightRes[k]);
                break;
              case '-':
                result.push(lefRes[j] - rightRes[k]);
                break;
              case '*':
                result.push(lefRes[j] * rightRes[k]);
                break;
              default:
                break;
            }
          }
        }
      }
    }
    if (result.length === 0) result.push(+str);
    cache[str] = result;
    return result;
  };
  return diffWays(input);
};

console.log(diffWaysToCompute('2*3-4*5'));
