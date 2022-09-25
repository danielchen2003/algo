var maxSubArray = function (nums) {
  let max = -Infinity
  const helper = (arr) => {
    if (arr.length === 0) return 0
    let sum = arr.reduce((pre, cur) => pre + cur, 0)
    max = Math.max(max, sum)
    return helper(arr.shift()) || helper(arr.pop())
  }
  helper(nums)
  return max
}
