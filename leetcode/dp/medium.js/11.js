var maxArea = function (height) {
  let res = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    res = Math.max(res, Math.min(height[l], height[r]) * (r - l))
    if (height[l] >= height[r]) {
      r--
    } else {
      l++
    }
  }
  return res
}

//左边右边一起动
//左边》 右边越界结束
//不听统计最大值
let a = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(a))
