var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1
  if (nums.length === 1 && nums[0] <= 0) return 1
  let arr = []
  nums.forEach((v) => {
    if (v >= 1) {
      arr[v] = 1
    }
  })
  console.log(arr)
  if (!arr.length) return 1

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return i
    }
  }
  return arr.length
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]
firstMissingPositive(nums)
console.log("")
