/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0
  let sl = s.length
  if (!sl) {
    return true
  }

  for (let j = 0; j < t.length; j++) {
    let target = s[i]
    let cur = t[j]
    if (cur === target) {
      i++
      if (i === sl) {
        return true
      }
    }
  }

  return false
}
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sl = s.length
  if (!sl) {
    return true
  }

  let i = 0
  for (let j = 0; j < t.length; j++) {
    let target = s[i]
    let cur = t[j]
    if (cur === target) {
      i++
      if (i === sl) {
        return true
      }
    }
  }

  return false
}

// 自己写是繁琐方法  ，
var isSubsequence = function (s, t) {
  let flag = false
  let sl = s.length
  if (!sl) {
    return true
  }
  for (let i = 0; i < t.length; i++) {
    let str = t
    let sFlag = ""
    for (let j = 0; j < s.length; j++) {
      const _index = str.indexOf(s[j])
      if (_index === -1) {
        break
      }
      // if (j === s.length - 1) {
      sFlag += s[j]
      str = str.slice(_index + 1)
      if (sFlag === s) {
        flag = true
        console.log(str, sFlag, _index)
        break
      }
    }
  }

  return flag
}

console.log(isSubsequence("aaaaaa", "bbaaaa"))
