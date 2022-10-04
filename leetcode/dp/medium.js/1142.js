const longestCommonSubsequence = (text1, text2) => {
  let [m, n] = [text1.length, text2.length]
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  return dp[m][n]
}
