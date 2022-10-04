// const change = (amount, coins) => {
//   let dp = Array(amount + 1).fill(0)
//   dp[0] = 1

//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j <= amount; j++) {
//       dp[j] += dp[j - coins[i]]
//     }
//   }

//   return dp[amount]
// }

const change = (amount, coins) => {
  if (amount === 0) return 0
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    //5 [1,2,5]
    // 一旦j 大于amount 就听下来
    for (let j = coins[i]; j <= amount; j++) {
      //单调向上 j =0 的时候可以选择 任何值【1,2,5】
      //然而 j++  coin[1] 的时候我们不能再重新选的j[0]因为已经过去loop了
      //相当于当前的背包大小减去coins【ℹ️ 】重量还能放下多少
      dp[j] += dp[j - coins[i]]
    }
  }

  return dp[amount]
}
let amount = 5,
  coins = [1, 2, 5]
change(amount, coins)
//我不关心下面的coin有多少选择
//当前的coin 有多少选择我就写多少，
// 下面的选择会根据我当前选择而变化

const change = (amount, coins) => {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    let curCoin = coins[i]
    for (let j = 1; j < amount; j++) {
      //当前金额可以用多少可以用它自己  111  可以用 2+1  3- 2
      if (j < curCoin) {
        //coin不能大于amount
        continue
      }
      dp[j] = dp[j] + dp[j - curCoin]
    }
  }
  return dp[amount]
}
