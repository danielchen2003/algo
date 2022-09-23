// let i = 10
// while (i !== 20) {
//   console.log(++i)
// }
// console.log(i)

var minCostClimbingStairs = function (cost) {
  pre = cost[0]
  cur = cost[1]

  for (let i = 2; i < cost.length; i++) {
    next = Math.min(pre + cost[i], cur + cost[i])
    pre = cur
    cur = next
  }
  // console.log(dp)
  return Math.min(pre, cur)
}
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost))
