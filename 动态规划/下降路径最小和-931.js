/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
  let n = A.length;

  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }

  for (let j = 0; j < n; j++) {
    dp[n - 1][j] = A[n - 1][j];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity;
      let left = j - 1;
      let right = j + 1;
      let mid = j;
      let nextRowIndexes = [left, mid, right];
      for (let nextRowIndex of nextRowIndexes) {
        if (nextRowIndex >= 0 && nextRowIndex < n) {
          dp[i][j] = Math.min(dp[i][j], A[i][j] + dp[i + 1][nextRowIndex]);
        }
      }
    }
  }

  // 第一行的最小值 可以确定整体的最小路径
  return Math.min(...dp[0]);
};
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let safeNum = Infinity;

  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }

  dp[n - 1] = matrix[n - 1];
  for (var i = n - 2; i >= 0; i--) {
    for (var j = 0; j <= n - 1; j++) {
      const left = j - 1 >= 0 ? dp[i + 1][j - 1] : safeNum;
      const right = j + 1 <= n - 1 ? dp[i + 1][j + 1] : safeNum;
      dp[i][j] = matrix[i][j] + Math.min(left, dp[i + 1][j], right);
    }
  }
  return Math.min(...dp[0]);
};

console.log(
  minFallingPathSum([
    [100, -42, -46, -41],
    [31, 97, 10, -10],
    [-58, -51, 82, 89],
    [51, 81, 69, -51],
  ])
);
