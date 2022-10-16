var maxSlidingWindow = function (nums, k) {
  let res = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    console.log(nums.slice(i, i + k))
    let max = helper(nums, i, i + k - 1)
    res.push(max)
  }

  return res
  function helper(nums, i, j) {
    let res = nums[i]
    for (let k = i; k <= j; k++) {
      res = Math.max(res, nums[k])
    }
    return res
  }
}
//  [0,1,2]
let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 4
maxSlidingWindow(nums, k)
