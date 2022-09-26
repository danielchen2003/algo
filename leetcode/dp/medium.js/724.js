var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0)
  let half = 0
  for (let i in nums) {
    // 2 * sum + nums[i] === total
    if (half * 2 + nums[i] === sum) {
      return i
    }
    half += nums[i]
  }
  return -1
}

// if (leftsum == presum - nums[i] - leftsum) {
//   return i;
// }
nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))
