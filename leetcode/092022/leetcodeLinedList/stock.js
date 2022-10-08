let maxProfit = (prices) => {
  let len = prices.length
  let dp = Array(len).fill([0, 0])
  dp[0][0] = 0 //不持有
  dp[0][1] = -prices[0] //持有
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    //                    昨天买入价格和今天
    dp[i][1] = Math.min(dp[i - 1][1], -prices[i])
    //min 找最大成本
    console.log(dp)
  }

  return dp[len - 1][0]
}

let prices = [1, 2, 3, 4, 6]
console.log(maxProfit(prices))
//    第一天卖出赚1元， 第一天不卖出当前亏1元买成本
// [ [ 1, -1 ], [ 1, -1 ], [ 1, -1 ], [ 1, -1 ], [ 1, -1 ] ]
// 第2天卖出赚2元， 第2天不卖出当前最低亏1元买成本
// [ [ 2, -1 ], [ 2, -1 ], [ 2, -1 ], [ 2, -1 ], [ 2, -1 ] ]
// 第2天卖出赚3元， 第2天不卖出当前最低亏1元买成本
// [ [ 3, -1 ], [ 3, -1 ], [ 3, -1 ], [ 3, -1 ], [ 3, -1 ] ]
// 第3天卖出赚5元， 第6天不卖出当前最低亏1元买成本
// [ [ 5, -1 ], [ 5, -1 ], [ 5, -1 ], [ 5, -1 ], [ 5, -1 ] ]
