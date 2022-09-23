var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0)
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      console.log(dp)
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
      //每次都在尝试，不拆的办法，直接dp[i],拆的办法，j * i-j
      // dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(dp[i - j], i - j))
      //j*(i-j)表示把i拆分为j和i-j两个数相乘
      //j*dp[i-j]表示把i拆分成j和继续把(i-j)这个数拆分，取(i-j)拆分结果中的最大乘积与j相乘
    }
  }
  return dp[n]
}
console.log(integerBreak())
