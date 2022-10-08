const coinChange = (coins, amount) => {
  if (amount == 0) return 0
  dp[0] = 1
  let dp = new Array(amount + 1).fill(Infinity)
  for (let i = 1; i < coins; i++) {
    for (let j = 0; j <= amount; j++) {
      if (coins[j] < coins[i]) {
        continue
      }
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

let coins = [1, 2, 5],
  amount = 11
console.log(coinChange(coins, amount))
