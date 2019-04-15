/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.22%)
 * Total Accepted:    46K
 * Total Submissions: 126.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   if (s.length === 0) return true;
//   const stack = [[], [], []];
//   for (let i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case '(':
//         stack[0].push(s[i]);
//         break;
//       case ')':
//         if (stack[0].length === 0) return false;
//         stack[0].pop();
//         break;
//       case '{':
//         stack[1].push(s[i]);
//         break;
//       case '}':
//         if (stack[1].length === 0) return false;
//         stack[1].pop();
//         break;
//       case '[':
//         stack[2].push(s[i]);
//         break;
//       case ']':
//         if (stack[2].length === 0) return false;
//         stack[2].pop();
//       default:
//         break;
//     }
//   }
//   console.log(stack);
//   return stack.every((s) => s.length === 0);
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    switch (s[i]) {
      case '(':
        stack.push(s[i]);
        break;
      case '[':
        stack.push(s[i]);
        break;
      case '{':
        stack.push(s[i]);
        break;
      case ')':
        if (top !== '(') return false;
        stack.pop();
        break;
      case '}':
        if (top !== '{') return false;
        stack.pop();
        break;
      case ']':
        if (top !== '[') return false;
        stack.pop();
        break;
    }
  }
  return stack.length === 0;
};

// 注意审题