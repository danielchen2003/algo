let i = 10
while (i !== 20) {
  console.log(++i)
}
// console.log(i)

var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]]

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
  }
  console.log(dp)
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
}
cost = [1, 100, 100, 1, 1, 100, 1, 1, 100, 1]
minCostClimbingStairs(cost)
