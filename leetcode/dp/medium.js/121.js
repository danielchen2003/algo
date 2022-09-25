// var maxProfit = function (price) {
//   let low = Infinity
//   let res = 0
//   for (let i = 0; i < price.length; i++) {
//     low = Math.min(low, price[i])
//     console.log(low)
//     res = Math.max(res, price[i] - low)
//     console.log(res)
//   }
//   return res
// }

const maxProfit1 = (prices) => {
  const len = prices.length
  // 创建dp数组
  const dp = new Array(len).fill([0, 0])
  // dp数组初始化
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ]
  }
  console.log(dp)
  return dp[len - 1][1]
}

let maxProfit2 = function (prices) {
  let n = prices.length
  let dp = Array.from(new Array(n), () => new Array(2))
  dp[0][0] = 0 //第0天不持有
  dp[0][1] = -prices[0] //第0天持有
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]) //找到最大卖出价格前提持有情况下
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]) //找到最低买入价格
  }
  console.log(dp)

  return dp[n - 1][0]
}

//第一种情况，完全不持有股票，那么久需要把手上股票全面卖出
//第二种情况，手上持继续持有股票，不动操作。 两种可能性
//第一以前持有股票，
//第二种以前没有持有当日买入股票。

let maxProfit = (prices) => {
  let len = prices.length
  let dp = Array(len).fill([0, 0])
  dp[0][0] = 0 //不持有
  dp[0][1] = -prices[0] //持有
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  console.log(dp)
  return dp[len - 1][0]
}

let maxProfit3 = (prices) => {
  let dp = []
  dp[0] = -prices[0]
  dp[1] = 0
  // 可以参考斐波那契问题的优化方式
  // 我们从 i=1 开始遍历数组，一共有 prices.length 天，
  // 所以是 i<=prices.length
  for (let i = 1; i <= prices.length; i++) {
    console.log(dp)
    // 前一天持有；或当天买入
    dp[0] = Math.max(dp[0], -prices[i - 1])
    // 如果 dp[0] 被更新，那么 dp[1] 肯定会被更新为正数的 dp[1]
    // 而不是 dp[0]+prices[i-1]==0 的0，
    // 所以这里使用会改变的dp[0]也是可以的
    // 当然 dp[1] 初始值为 0 ，被更新成 0 也没影响
    // 前一天卖出；或当天卖出, 当天要卖出，得前一天持有才行
    dp[1] = Math.max(dp[1], dp[0] + prices[i - 1])
  }

  return dp[1]
}
prices = [7, 1, 5, 3, 6, 4]
//前面是持有不卖
//后面是买入后卖出，负数不算
maxProfit3(prices)
