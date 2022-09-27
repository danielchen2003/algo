var sumZero = function (n) {
  let res = []
  let sum = 0
  for (let i = 0; i <= n - 2; i++) {
    res.push(i)
    sum += i
  }
  res.push(-sum)

  return res
}
