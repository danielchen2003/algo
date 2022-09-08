// var containsNearbyDuplicate = function (nums, k) {
//   let seen = {}

//   for (let i = 0; i < nums.length; i++) {
//     console.log(seen)
//     //如果不存在就记录一下位置
//     if (!seen[nums[i]]) {
//     } else {
//       if (i - seen[nums[i]] <= k) return true
//       console.log(i - seen[nums[i]])
//     }
//     seen[nums[i]] = i
//   }
//   return false
// }

var containsNearbyDuplicate = function (nums, k) {
  const mp = new Map()
  for (let i in nums) {
    if (mp.has(nums[i]) && i - mp.get(nums[i]) <= k) {
      return true
    }
    mp.set(nums[i], i)
  }
  return false
}

var containsNearbyDuplicate = function (nums, k) {
  var map = new Map()
  for (let i in nums) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}
let nums = [1, 2, 3, 1, 2, 3]
let k = 1
console.log(containsNearbyDuplicate(nums, k))
