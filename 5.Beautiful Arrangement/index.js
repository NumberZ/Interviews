/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  const visited = [...new Array(N + 1)].map(() => false);
  let count = 0;
  calculate(N, 1, visited);
  return count;

  function calculate(N, pos, visited) {
    if (pos > N) count++;
    for (let i = 1; i <= N; i++) {
      if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
        visited[i] = true;
        calculate(N, pos + 1, visited);
        visited[i] = false;
      }
    }
  }
};
