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
  if ((amount = 0)) return 0
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0]=0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0 && dp[i - coins[j]] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]]+1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}


class Solution {
  public:
      int coinChange(vector<int>& coins, int amount) {
          vector<int> dp(amount + 1, INT_MAX);
          dp[0] = 0;
          for (int i = 1; i <= amount; i++) {  // 遍历背包
              for (int j = 0; j < coins.size(); j++) { // 遍历物品
                  if (i - coins[j] >= 0 && dp[i - coins[j]] != INT_MAX ) {
                      dp[i] = min(dp[i - coins[j]] + 1, dp[i]);
                  }
              }
          }
          if (dp[amount] == INT_MAX) return -1;
          return dp[amount];
      }
  };