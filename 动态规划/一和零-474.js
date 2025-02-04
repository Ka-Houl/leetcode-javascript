/**
 * TODO:看是看懂了，自己写又想不起思路
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let findMaxForm = function (strs, m, n) {
  let sl = strs.length
  if (!sl) {
    return 0
  }
  // dp[i][j][s] 表示输入字符串在子区间 [0, s] 能够使用 i 个 0 和 j 个 1 的字符串的最大数量。
  let dp = []

  for (let i = 0; i <= m; i++) {
    dp[i] = []
    for (let j = 0; j <= n; j++) {
      dp[i][j] = []
      for (let s = 0; s < sl; s++) {
        let str = strs[s]
        let [strM, strN] = countMAndN(str)

        let pickOnlyPrev = dp[i][j][s - 1] || 0
        let pickCurAndPrev = 0
        if (i >= strM && j >= strN) {
          pickCurAndPrev = 1 + (dp[i - strM][j - strN][s - 1] || 0)
        }

        dp[i][j][s] = Math.max(pickCurAndPrev, pickOnlyPrev)
      }
    }
  }
  return dp[m][n][sl - 1]
}

function countMAndN(str) {
  let m = 0
  let n = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      m++
    } else {
      n++
    }
  }
  return [m, n]
}

console.log(findMaxForm(["10", "0", "1"], 1, 1))
