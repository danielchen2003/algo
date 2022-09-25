var findMin = function (nums) {
  let res = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
  return res
}

var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] < nums[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return nums[mid]
}
