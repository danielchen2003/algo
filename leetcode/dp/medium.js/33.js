var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)
    if (target === nums[mid]) return mid
    if (nums[l] <= nums[mid]) {
      //如果左边比中间小那么久是 正常排序 [5,6,7,8,9,0,1,2,3,4]
      //第一次比是不是正常序列
      //第二次比是不是在此区间和头区间内
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
  return -1
}

// (nums = [4, 5, 6, 7, 0, 1, 2]), (target = 1)
// return 4
//[] mid = 3
// nums [mid ] = 7
// l <target < mid
//  r = mid -1
//  else
//  left = mid

//  else
