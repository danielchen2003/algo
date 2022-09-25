var maxProduct = function (nums) {
  let res = -Infinity
  let curMax = 1
  let curMin = 1
  for (num of nums) {
    if (num < 0) [curMax, curMin] = [curMin, curMax]

    curMax = Math.max(curMax * num, num)
    curMin = Math.min(curMin * num, num)
    res = Math.max(res, curMax)
  }
  return res
}

var maxProduct = function (nums) {
  let max = -Infinity
  let min = Infinity
  let res = -Infinity
  let pre = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      ;[max, min] = [min, max]
    }
    max = Math.max(max * nums[i], nums[i])
    min = Math.min(min * nums[i], nums[i])

    res = Math.max(res, max)
  }
  return max
}

// nums = [2,3,-2,4,-3]

// min =  -12 =36
// max =  24 =-72
