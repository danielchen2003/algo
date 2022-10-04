var countSubIslands = function (grid1, grid2) {
  let row = grid2.length
  let col = grid2[0].length

  const visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false)
  }

  function dfs(gird2, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      visited[i][i] ||
      grid2[i][j] === 0
    )
      return true
    if (grid1[i][j] === 0) {
      res = false
    }
    visited[i][j] = true
    ;(res = dfs(gird2, i + 1, j) && res)((res &&= dfs(gird2, i - 1, j)))(
      (res &&= dfs(gird2, i, j + 1))
    )((res &&= dfs(gird2, i, j - 1)))
    return res
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] == 1) {
        dfs(grid2[i][j])
        count++
      }
    }
  }
  return count
}

var countSubIslands = function (grid1, grid2) {
  const [m, n] = [grid1.length, grid1[0].length]
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const foot = new Array(m)
  for (let i = 0; i < m; i++) {
    foot[i] = new Array(n).fill(false)
  }
  // 如果找到符合条件的岛屿
  const dfs = (i, j, grid1, grid2, foot, dirs) => {
    // 临界点，直接返回true
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || foot[i][j] || !grid2[i][j])
      return true
    foot[i][j] = true
    // 假设该岛符合条件
    let flag = true
    for (const [x, y] of dirs) {
      // 相邻的岛是否符合条件
      const val = dfs(i + x, j + y, grid1, grid2, foot, dirs)
      if (!val) flag = false
    }
    // 如果发现访问的岛屿不被grid1包含,说明该岛不符合条件
    return grid1[i][j] == grid2[i][j] ? flag : false
  }
  // 记录符合条件的岛屿
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!foot[i][j] && grid2[i][j]) {
        // 将dfs的结果转化为number参与计算
        res += +dfs(i, j, grid1, grid2, foot, dirs)
      }
    }
  }
  return res
}

var countSubIslands = function (grid1, grid2) {
  let memo = []
  for (let i = 0; i < grid2.length; i++) {
    memo[i] = new Array()
    for (let j = 0; j < grid2[i].length; j++) {
      memo[i][j] = undefined
    }
  }

  var dfs = function (i, j) {
    if (memo[i][j] != undefined) {
      return memo[i][j]
    }
    if (grid2[i][j] === 0 || grid2[i][j] === 2) {
      return (memo[i][j] = true)
    }
    grid2[i][j] = 2
    let isValid = true
    if (grid1[i][j] != 1) {
      isValid = false
    }

    let isValid1 = true
    let isValid2 = true
    let isValid3 = true
    let isValid4 = true

    if (i - 1 >= 0) {
      isValid1 = dfs(i - 1, j)
    }

    if (i + 1 <= grid2.length - 1) {
      isValid2 = dfs(i + 1, j)
    }

    if (j - 1 >= 0) {
      isValid3 = dfs(i, j - 1)
    }

    if (j + 1 <= grid2[0].length - 1) {
      isValid4 = dfs(i, j + 1)
    }

    return (memo[i][j] =
      isValid && isValid1 && isValid2 && isValid3 && isValid4)
  }

  let count = 0
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      if (grid2[i][j] === 1) {
        let ans = dfs(i, j)
        if (ans) {
          count++
        }
      }
    }
  }

  return count
}
