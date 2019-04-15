/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (40.03%)
 * Total Accepted:    22.3K
 * Total Submissions: 54.5K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例 2:
 *
0 1 2 3 2 1 0 1 2 3 2 1 0 1 2 3
L E E T C O D E I S H I R I N G, numRows = 
0 1 2 3 4 5 6 7 8 9 10
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const containers = [...new Array(numRows)].map(() => []);
  let arrow = 1;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    containers[j].push(s[i]);
    if (arrow === 1) {
      j++;
      if (j >= numRows) {
        j = numRows - 2;
        arrow = -1;
      }
    } else {
      j--;
      if (j < 0) {
        j = 1;
        arrow = 1;
      }
    }
  }
  return containers.reduce((pre, cur) => {
    return pre + cur.join('');
  }, '');
};
/**
 * 解题思路:
 * 1.设置一个标志位表示方向
 * 2.注意判断numRows为1的情况
 */
