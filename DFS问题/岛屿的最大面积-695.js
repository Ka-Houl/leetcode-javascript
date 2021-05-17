// https://github.com/sl1673495/daily-plan/issues/18

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let yLen = grid.length
  if (!yLen) return grid
  let xLen = grid[0].length
  let max = 0

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (grid[y][x] === 1) {
        let countRef = { current: 0 }
        dfs(grid, y, x, countRef)
        if (countRef.current > max) {
          max = countRef.current
        }
      }
    }
  }
  return max
}

function dfs(grid, y, x, countRef) {
  if (
    !grid[y] ||
    !grid[y][x] ||
    grid[y][x] === 0 ||
    grid[y][x] === "COMPLETE"
  ) {
    return
  }

  if (grid[y][x] === 1) {
    grid[y][x] = "COMPLETE"
    countRef.current++
  }

  dfs(grid, y - 1, x, countRef)
  dfs(grid, y + 1, x, countRef)
  dfs(grid, y, x - 1, countRef)
  dfs(grid, y, x + 1, countRef)
}

// 错的  flag 冲突了

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let yLen = grid.length
  if (!yLen) return 0
  let xLen = grid[0].length
  let perimeter = {}

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (grid[y][x] === 1) {
        // perimeter[`${y}@${x}`] = 1
        dfs(grid, y, x, perimeter, `${y}@${x}`)
      }
    }
  }
  console.log(perimeter)
  var arr = Object.values(perimeter)
  const _len = arr.length
  return !_len ? 0 : Math.max(...arr)
}

function dfs(grid, y, x, perimeter, key) {
  // let cell = grid[y][x]

  // if (cell === "COMPLETE") return

  if (
    !grid[y] ||
    !grid[y][x] ||
    grid[y][x] === 0 ||
    grid[y][x] === "COMPLETE"
  ) {
    return
  }

  grid[y][x] = "COMPLETE"
  perimeter[key] ? perimeter[key]++ : (perimeter[key] = 1)
  let below = grid[y - 1] && grid[y - 1][x]
  let upper = grid[y + 1] && grid[y + 1][x]
  let left = grid[y][x - 1]
  let right = grid[y][x + 1]
  // console.log(below, upper, left, right)
  dfs(grid, y - 1, x, perimeter, key)
  dfs(grid, y + 1, x, perimeter, key)
  dfs(grid, y, x - 1, perimeter, key)
  dfs(grid, y, x + 1, perimeter, key)
  return

  if (below === 1) {
    perimeter[key] ? perimeter[key]++ : (perimeter[key] = 1)
    dfs(grid, y - 1, x, perimeter, key)
  } else {
  }

  if (upper === 1) {
    perimeter[key] ? perimeter[key]++ : (perimeter[key] = 1)
    dfs(grid, y + 1, x, perimeter, key)
  } else {
  }

  if (left === 1) {
    perimeter[key] ? perimeter[key]++ : (perimeter[key] = 1)
    dfs(grid, y, x - 1, perimeter, key)
  } else {
  }

  if (right === 1) {
    perimeter[key] ? perimeter[key]++ : (perimeter[key] = 1)
    dfs(grid, y, x + 1, perimeter, key)
  } else {
  }
}
var a = maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
])
// var a = maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])
// var a = maxAreaOfIsland([
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 1, 1],
// ])

var b = a
debugger

console.log(a)
