/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let n = nums.length
  // 定义[i,...j]滑动窗口 取这个窗口里的和
  let i = 0
  let j = -1

  let sum = 0
  let res = Infinity

  while (i < n) {
    if (sum < s) {
      sum += nums[++j]
    } else {
      sum -= nums[i]
      i++
    }

    if (sum >= s) {
      res = Math.min(res, j - i + 1)
    }
  }
  return res === Infinity ? 0 : res
}

var minSubArrayLen = function (target, nums) {
  // function getSumInList(start, end) {
  //   return sum(nums.slice(start, end + 1))
  // }
  let n = nums.length

  let result = 99999999  // Infinity
  for (var i = 0; i < n; i++) {
    let left = i
    let right = i
    let sumData = 0
    while (sumData < target && right <= n - 1) {
      right++
      console.log("nums[right]", nums[right])
      sumData += nums[right - 1] || 0
    }
    console.log("sumData", sumData)
    if (sumData >= target) {
      result = Math.min(right - left, result)
      // console.log("result", result, "right", right, "left", left)
    }
  }

  return result === 99999999 ? 0 : result
}

const sum = (arr) => arr.reduce((pre, item) => pre + item, 0)

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
