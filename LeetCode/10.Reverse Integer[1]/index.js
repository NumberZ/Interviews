/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   const str = String(x);
//   const max = Math.pow(2, 31);
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (i !== '-') {
//       result += str[i];
//     }
//   }
//   const num = x > 0 ? parseInt(result, 10) : -parseInt(result, 10);
//   if (num > max - 1 || num < -max) return 0;
//   return num;
// };

var reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  let result = 0;
  while (x != 0) {
    result = result * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (result > max || result < -max - 1) return 0;
  return result;
};

console.log(reverse(-90000));
