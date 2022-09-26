var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[0] > 0) return false
  let res = []

  for (let i = 0; i < nums.length; i++) {
    if (i && nums[i] === nums[i - 1]) continue
    let k = nums.length - 1
    let j = i + 1
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++
      } else {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        k--
        j++
      }
    }
  }
  return res
}

nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
