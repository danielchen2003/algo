var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = Array(m)
    .fill(0)
    .map((item) => Array(n).fill(0))

  for (let i = 0; i < m; ++i) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    dp[i][0] = 1
  }

  for (let i = 0; i < n; ++i) {
    if (obstacleGrid[0][i] === 1) {
      break
    }
    dp[0][i] = 1
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
let obstacleGrid = [
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
console.log(uniquePathsWithObstacles(obstacleGrid))
