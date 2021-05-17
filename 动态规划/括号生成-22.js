// let generateParenthesis = function (n) {
//   let dp = []
//   dp[0] = ['']
//   dp[1] = ['()']

//   for (let i = 2; i <= n; i++) {
//       let res = []
//       for (let j = 0; j <= i - 1; j++) {
//            let inners = dp[j]
//            let outers = dp[i - 1 - j]

//            for (let inner of inners) {
//                for (let outer of outers) {
//                    res.push(`(${inner})${outer}`)
//                }
//            }
//       }
//       dp[i] = res
//   }
//   return dp[n]
// };
let generateParenthesis = function (n) {
    let res = []

    let helper = (left, right, prev) => {
        if (left < 0 || right < 0 ) {
            return
        }
        if (left === 0 && right === 0) {
            // res.shift(prev)
            res.push(prev)
            return
        }

        helper(left - 1, right, prev + '(')
        helper(left, right - 1, prev + ')')
    }

    helper(n, n, '')
    return res
}
// console.log(generateParenthesis(4))
console.log(generateParenthesis(1))