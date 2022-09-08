// var searchInsert = function (nums, target) {
//   let end = nums.length - 1
//   let start = 0
//   let middle = Math.floor((end + start) / 2)
//   while (start < end) {
//     console.log(start + middle + end)
//     if (target > middle) {
//       start = middle
//     } else {
//       end = middle
//     }
//     middle = Math.floor((end + start) / 2)
//   }
//   console.log(middle)
//   return middle
// }

var searchInsert = function (nums, target) {
  const n = nums.length
  let left = 0,
    right = n - 1,
    ans = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

var searchInsert = function (nums, target) {
  const L = nums.length
  let start = 0
  let end = L - 1
  let res = 0
  while (start <= end) {
    // console.log(end)
    let middle = Math.floor((start + end) / 2) + start
    if (nums[middle] >= target) {
      res = middle
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return res
}

let nums = [1, 3, 5, 6]
let target = 4

console.log(searchInsert(nums, target))
