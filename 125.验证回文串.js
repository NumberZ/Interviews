/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.split('').filter(char => /\w/.test(char));
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i].toUpperCase() !== s[j].toUpperCase()) return false;
  }
  return true;
};