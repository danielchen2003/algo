var mySqrt1 = function (x) {
  let l = 1
  let r = x
  while (l <= r) {
    let m = l + ((r - l) >> 1)
    if (m * m === x) return m
    if (m * m < x) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return r
}
// console.log(mySqrt1(1000000001))
var mySqrt2 = function (a) {
  let x = a
  while (x * x > a) {
    // console.log(x)
    x = Math.floor((x + a / x) / 2)
  }
  return x
}
console.log(mySqrt2(1000000001))
