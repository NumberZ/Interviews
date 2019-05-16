var partition = function(s) {
  const path = [];
  const ret = [];
  dfs(0, s, path, ret);
  return ret;
};

function dfs(index, s, path, ret) {
  if (index === s.length) {
    ret.push([].concat(path));
    return;
  }
  for (let i = index; i < s.length; i++) {
    const substr = s.substring(index, i + 1);
    if (isPalindrome(substr)) {
      path.push(substr);
      dfs(i + 1, s, path, ret);
      path.pop();
    }
  }
}

function isPalindrome(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}
