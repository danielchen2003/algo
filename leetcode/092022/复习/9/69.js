var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left <= right) {
    let mid = left + ((right - left) >> 1) //中间位置索引 x>>1 表示除以2并取整，缩小一下遍历的范围
    if (mid * mid <= x) {
      left = mid
    } else {
      right = mid
    }
  }
  return right
}
