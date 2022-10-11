var smallestFactorization = function (nums) {
  if (nums < 2) {
    return nums
  }
  let mul = 0,
    temp = 1
  for (i = 9; i >= 2; i--) {
    while (nums % i == 0) {
      nums /= i
      mul += i * temp
      temp *= 10
    }
  }
  return nums < 2 && mul < Math.pow(2, 31) ? mul : 0
}

var smallestFactorization = function (nums) {
  if (nums < 2) return nums
  let res = 0
  // let temp = 0
  let loop = 0
  for (let i = 9; i >= 2; i--) {
    while (nums % i == 0) {
      nums /= i
      res += Math.pow(10, loop++) * i
    }
  }
  if (nums > 9 || res > Math.pow(2, 31)) return 0
  return res
}

console.log(smallestFactorization(48))
