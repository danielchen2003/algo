var findMaxAverage = function (nums, k) {
  let sum = 0
  let max_avg = -Infinity
  let start = 0
  for (let end in nums) {
    sum += nums[end]
    if (end >= k - 1) {
      max_avg = Math.max(max_avg, sum / k)
      sum -= nums[start]
      start++
    }
  }
  return max_avg
}

var findMaxAverage = function (nums, k) {
  let sum = 0
  let max = -Infinity
  let start = 0
  for (let end in nums) {
    sum += nums[end]
    if (end - start >= k - 1) {
      max = Math.max(max, sum / k)
      sum -= nums[start]
      start++
    }
  }
  return max
}
