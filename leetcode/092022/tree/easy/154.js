var findMin = function (nums) {
  function helper(nums, l, r) {
    if (r - l + 1 >= 2) return Math.min(nums[l], nums[r])
    if (nums[l] < nums[r]) return nums[l]
    let m = Math.floor((l + r) / 2)
    return Math.min(helper(nums, l, m - 1), helper(nums, m, r))
  }
  return helper(nums, 0, nums.length - 1)
}

var findMin = function (nums) {
  function helper(nums, l, r) {
    if (r - l + 1 <= 2) return Math.min(nums[l], nums[r])

    if (nums[l] < nums[r]) return nums[l]
    let m = Math.floor((l + r) / 2)
    return Math.min(helper(nums, l, m - 1), helper(nums, m, r))
  }
  return helper(nums, 0, nums.length - 1)
}
