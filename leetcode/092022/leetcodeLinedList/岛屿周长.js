function islandPerimeter(grid) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == 1) {
        // 题目限制只有一个岛屿，计算一个即可
        return dfs(grid, r, c)
      }
    }
  }
  return 0
}

let dfs = (grid, r, c) => {
  if (!(0 <= r && r < grid.length && 0 <= c && c < grid[0].length)) {
    return 1
  }
  if (grid[r][c] == 0) {
    return 1
  }
  if (grid[r][c] != 1) {
    return 0
  }
  grid[r][c] = 2
  return (
    dfs(grid, r - 1, c) +
    dfs(grid, r + 1, c) +
    dfs(grid, r, c - 1) +
    dfs(grid, r, c + 1)
  )
}

function islandPerimeter(grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        res += dfs(grid, i, j)
      }
    }
  }
  const dfs = (grid, i, j) => {
    if (!(0 <= i && i < grid.length && 0 <= j && j < grid[0].length)) {
      return 1
    }
    if (!inArea(gird, i, j)) return 1
    if (grid[i][j] === 0) return 1
    if (gird[i][j] === 2) return 0
    grid[i][j] = 2

    return (
      dfs(grid, i + 1, j) +
      dfs(grid, i - 1, j) +
      dfs(grid, i, j + 1) +
      dfs(grid, i, j - 1)
    )
  }
  function inArea(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return true
  }
  return res
}
