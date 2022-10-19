var mySqrt = function (x) {
  let i = 1
  let j = x
  while (i + 1 < j) {
    let mid = i + ((j - i) >> 1)
    if (mid * mid === x) return mid
    if (mid * mid > x) j = mid
    else {
      i = mid
    }
  }
  console.log(i, j)
  if (i * i <= x) return i
  if (j * j <= x) return j
}
console.log(mySqrt(8))
