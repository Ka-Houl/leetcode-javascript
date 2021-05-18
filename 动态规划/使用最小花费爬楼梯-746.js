/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = []

  for (let i = cost.length - 1; i >= 0; i--) {
    let oneStep = cost[i] + (dp[i + 1] || 0)
    let twoStep = cost[i] + (dp[i + 2] || 0)

    dp[i] = Math.min(oneStep, twoStep)
  }

  return Math.min(dp[0], dp[1])
}

var minCostClimbingStairs = function (cost) {
  let dp = []
  const len = cost.length
  //   dp[0] = 0
  dp[1] = Math.min(cost[0], cost[1])
  // if (len === 2) {
  //   return dp[1]
  // }
  dp[2] = Math.min(cost[0] + cost[2], cost[1])
  // for (let i = cost.length - 1; i >= 0; i--) {
  for (let i = 4; i <= cost.length; i++) {
    dp[i - 1] = Math.min(dp[i - 3] + cost[i - 1], dp[i - 2])
  }

  console.log(dp)
  return dp[cost.length - 1]
}
// console.log(minCostClimbingStairs([10, 15, 20]))
// console.log(minCostClimbingStairs([1, 5, 1]))
// console.log(minCostClimbingStairs([1, 5, 1, 1]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
