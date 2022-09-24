var maxProfit = function (price) {
  let low = Infinity
  let res = 0
  for (let i = 0; i < price.length; i++) {
    low = Math.min(low, price[i])
    res = Math.max(res, price[i] - low)
  }
  return res
}
