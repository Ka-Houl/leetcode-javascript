/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length;
  let dp = [];
  // 代表以第 n-1个数结尾的「连续子数组的最大和」
  dp[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    let pickSelf = nums[i];
    let pickWithNext = pickSelf + dp[i + 1];
    dp[i] = Math.max(pickSelf, pickWithNext);
  }

  return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 * @时间复杂度 O(N)
 * @空间复杂度 O(N)
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  if (!len) {
    return 0;
  }
  let dp = [];
  // 代表以第 n-1个数结尾的「连续子数组的最大和」
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    let cur = nums[i];
    let prev = dp[i - 1];
    dp[i] = prev < 0 ? nums[i] : prev + nums[i];
  }

  return Math.max(...dp);
};
/**
 * @param {number[]} nums
 * @return {number}
 * @时间复杂度 O(N)
 * @空间复杂度 O(1)
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  if (!len) {
    return 0;
  }
  // let dp = []
  // 代表以第 n-1个数结尾的「连续子数组的最大和」
  let res = (prev = nums[0]);
  for (let i = 1; i < len; i++) {
    let cur = nums[i];
    // let prev = dp[i - 1]
    prev = prev < 0 ? cur : prev + cur;
    res = Math.max(res, prev);
  }

  return res;
};
