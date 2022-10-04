const coinChange = (coins, amount) => {
  if (!amount) {
    return 0
  }

  let dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

const coinChange = (coins, amount) => {
  if (amount <= 1) return amount
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j in coins) {
    //   if (dp[i] - item >= 0 && dp[i - item] !== Infinity) {
    //     dp[i] = Math.min(dp[i - item] + 1, dp[i])
    if (i - coins[j] >= 0 && dp[i - coins[j]] != Infinity ) {
      dp[i] = min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount - 1]
}

let coins = [1, 2, 5]
let amount = 11
console.log(coinChange(coins, amount))

const coinChange = (coins, amount) => {
  if(!amount) return 0 
  let dp = new Array(amount+1).fill(Infinity)
  
  for(let i=1 ;i<= amount ;i++){
    for(let j= coins[i];j<amount;j++){
      dp[j] = Math.min(dp[j],dp[j-coins[i]]+1)
    }
  }
  return dp[]
}
