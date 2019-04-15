/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  const result = [];
  let carry = 0;
  while (i >= 0 || j >= 0 || carry) {
    const a = +num1[i] || 0;
    const b = +num2[j] || 0;
    const sum = a + b + carry;
    carry = sum >= 10 ? 1 : 0;
    result.unshift(sum % 10);
    i--;
    j--;
  }
  return result.join('');
};

