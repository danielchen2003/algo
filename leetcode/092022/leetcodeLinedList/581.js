var findUnsortedSubarray = function (nums) {
  //方法二：一次遍历
  let n = nums.length
  let max = -Infinity
  let min = Infinity
  let start = 0
  let end = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] >= max) {
      max = nums[i]
      console.log(max)
    } else {
      // console.log(end)
      end = i //从前往后遍历数组，更新非升序的下标
    }
    if (nums[n - 1 - i] <= min) {
      min = nums[n - 1 - i]
    } else {
      start = n - 1 - i //从后往前遍历数组，更新非降序的下标
      // console.log(start)
    }
  }
  return end - start + 1
}

var findUnsortedSubarray2 = function (nums) {
  let min = Infinity
  let max = -Infinity
  let start = 0
  let end = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) {
      end = i
    }
    max = Math.max(max, nums[i])
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > min) {
      start = i
    }
    min = Math.min(min, nums[i])
  }
  return end - start + 1
}
let nums = [2, 6, 4, 19, 8, 10, 9, 15]
console.log(findUnsortedSubarray2(nums))
