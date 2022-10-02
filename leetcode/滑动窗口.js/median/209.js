var minSubArrayLen = function (target, nums) {
  let start = 0
  let min = nums.length + 1
  let sum = 0
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end]
    if (sum === target) {
      min = Math.min(min, end - start + 1)
    }
    while (sum > target) {
      sum -= nums[start]
      start++
    }
  }
  return min === nums.length + 1 ? 0 : min
}

// var minSubArrayLen = function(target, nums) {
//     // 长度计算一次
//     const len = nums.length;
//     let l = r = sum = 0,
//           res = Infinity // 子数组最大不会超过自身
//     while(r < len) {
//         sum += nums[r];
//         // 窗口滑动
//         while(sum >= target) {
//             // r始终为开区间 [l, r)
//             res = Math.min(res,r-l+1)
//             sum-=nums[l++];
//         }
//         r++
//     }
//     return res ===Infinity ? 0 : res
// };

// var minSubArrayLen = function(target, nums) {
// //    let left: number = 0, right: number = 0;
// //     let res: number = nums.length + 1;
// //     let sum: number = 0;
//         const len = nums.length;
//     let left = right = sum = 0,
//         res = len + 1; // 子数组最大不会超过自身
//     while (right < nums.length) {
//         sum += nums[right];
//         if (sum >= target) {
//             // 不断移动左指针，直到不能再缩小为止
//             while (sum - nums[left] >= target) {
//                 sum -= nums[left++];
//             }
//             res = Math.min(res, right - left + 1);
//         }
//         right++;
//     }
//     return res === nums.length + 1 ? 0 : res;
// }

var minSubArrayLen = function (target, nums) {
  let l = (r = sum = 0)
  let res = nums.length + 1
  while (r < nums.length) {
    sum += nums[r]
    while (sum >= target) {
      res = Math.min(res, r - l + 1)
      sum -= nums[l++]
    }
    r++
  }
  return res === nums.length + 1 ? 0 : res
}
