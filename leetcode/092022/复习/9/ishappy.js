function getN(n) {
  if (n == 1 || n == 0) return n
  let res = 0
  while (n) {
    res += (n % 10) * (n % 10)
    n = parseInt(n / 10)
  }
  return res
}

var isHappy = function (n) {
  const sumSet = new Set()
  while (n != 1 && !sumSet.has(n)) {
    console.log(sumSet)
    sumSet.add(n)
    n = getN(n)
  }
  return n == 1
}
console.log(isHappy(19))
