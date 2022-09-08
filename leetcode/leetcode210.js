// var containsNearbyDuplicate = function (nums, k) {
//   const set = new Set()
//   const length = nums.length
//   for (let i = 0; i < length; i++) {
//     console.log(set)
//     //做窗口
//     if (i > k) {
//       set.delete(nums[i - k - 1])
//     }
//     if (set.has(nums[i])) {
//       return true
//     }
//     set.add(nums[i])
//   }
//   return false
// }
const nums = [1, 2, 3, 1, 2, 3]
const k = 2
console.log(containsNearbyDuplicate(nums, k))
var containsNearbyDuplicate = function (nums, k) {
  let window = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (i-k+1)
  }
}
