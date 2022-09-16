var searchInsert = function (nums, target) {
  const n = arr.length
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

let searchInsert3 = (arr, num) => {
  let n = arr.length
  let left = 0,
    right = n - 1
  let ans = n
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (num <= arr[mid]) {
      ans = md
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

let searchInsert2 = (arr, num) => {
  let n = arr.length
  let left = 0
  let right = n - 1
  let res = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (arr[mid] >= num) {
      right = mid - 1
      res = mid
    } else {
      left = mid + 1
    }
  }
  return res
}

let arr = [1, 3, 5, 6]
let num = 88
console.log(searchInsert2(arr, num))
