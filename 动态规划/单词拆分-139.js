/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length
  if (!n) return true
  // 去重
  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = true

  for (let i = 0; i <= n; i++) {
    for (let j = i; j >= 0; j--) {
      let word = s.slice(j, i)
      if (wordSet.has(word) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }

  return !!dp[n]
}

/**
 * 自己写的性能太差了。。。力扣不通过。。。orz
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   wordDict = new Set(wordDict)
//   wordDict = Array.from(wordDict)

//   let flag = false
//   let str = s
//   let dfs = (string) => {
//     for (var i = 0; i < wordDict.length; i++) {
//       const itemStr = wordDict[i]
//       var reg = new RegExp("^" + itemStr)
//       // console.log(
//       //   "222222222",
//       //   reg,
//       //   string,
//       //   "reg.test(string)===>",
//       //   reg.test(string)
//       // )
//       if (reg.test(string)) {
//         // console.log("itemStr", itemStr, reg, string)
//         let _string = string.slice(itemStr.length)
//         if (_string.length === 0) {
//           flag = true
//           return
//         }
//         // console.log("string", _string)
//         dfs(_string)
//       } else {
//         // dfs(string)
//         // return
//       }
//     }
//   }

//   dfs(str)

//   return flag
// }

// "bb"[("a", "b", "bbb", "bbbb")]
// "leetcode"
// ["leet","code"]
// console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"]))


console.log(1111, wordBreak("leetcode", ["leet","code"]))
