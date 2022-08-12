// var lengthOfLIS = function (nums) {
//   let maxLength = 0
//   let currentLength = 0
//   for (let i = 0; i < nums.length; i++) {
//     // console.log(i)
//     if (i === 0 || nums[i] > nums[i - 1]) {
//       currentLength += 1
//       // console.log(currentLength)
//     }
//     maxLength = currentLength > maxLength ? currentLength : maxLength
//   }
//   return maxLength
// }

// var lengthOfLIS = function (nums) {
//   let maxLength = 0
//   let currentLength = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0 || nums[i] > nums[i - 1]) {
//       currentLength += 1
//       // console.log(currentLength)
//     }
//     maxLength = currentLength > maxLength ? currentLength : maxLength
//   }
//   return maxLength
// }

// 0 1 2 3 4 5

// var lengthOfLIS = function (nums) {
//   var ans = [] //记录子序列
//   for (var i = 0; i < nums.length; i++) {
//     var left = 0,
//       right = ans.length
//     while (left < right) {
//       //二分法
//       var mid = (left + right) >>> 1
//       if (ans[mid] < nums[i]) left = mid + 1
//       else right = mid
//       console.log(mid)
//     } //在ans数组中找到第一个大于等于nums[i]的元素
//     if (right >= ans.length) ans.push(nums[i]) //找不到 在ans最后增加一项nums[i]
//     else ans[right] = nums[i] //找到 替换
//     console.log(ans)
//   }
//   return ans.length
// }

// const lengthOfLIS = function (nums) {
//   const len = nums.length
//   const ans = []
//   for (let i = 0; i < nums.length; i++) {
//     let left = 0
//     let right = len
//     while (left < right) {
//       let mid = Math.floor((left + right) / 2)
//       if (ans[mid] < nums[i]) left = mid + 1
//       else right = mid
//     }
//   }
// }

const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1)
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(j)
      if (nums[i] > nums[j]) {
        //当nums[i] > nums[j]，则构成一个上升对
        dp[i] = Math.max(dp[i], dp[j] + 1) //更新dp[i]
      }
    }
    result = Math.max(result, dp[i]) //更新结果
  }

  return result
}
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3, 5, 2, 3, 4, 5, 1, 2, 3, 4]))

// function lengthOfLIS(nums) {
//   let n = nums.length
//   if (n <= 1) {
//     return n
//   }
//   let tail = [nums[0]] //存放最长上升子序列数组
//   for (let i = 0; i < n; i++) {
//     if (nums[i] > tail[tail.length - 1]) {
//       //当nums中的元素比tail中的最后一个大时 可以放心push进tail
//       tail.push(nums[i])
//     } else {
//       //否则进行二分查找
//       let left = 0
//       let right = tail.length - 1
//       while (left < right) {
//         let mid = (left + right) >> 1
//         if (tail[mid] < nums[i]) {
//           left = mid + 1
//         } else {
//           right = mid
//         }
//       }
//       tail[left] = nums[i] //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
//       console.log(tail)
//     }
//   }
//   return tail.length
// }

// function lengthOfLIS(nums) {
//   let n = nums.length
//   if (n <= 1) {
//     return n
//   }
//   let tail = [nums[0]] //存放最长上升子序列数组
//   for (let i = 0; i < n; i++) {
//     if (nums[i] > tail[tail.length - 1]) {
//       //当nums中的元素比tail中的最后一个大时 可以放心push进tail //找到一个上升序列
//       tail.push(nums[i])
//       console.log(tail)
//     }
//     let left = 0
//     let right = nums.length
//     while (left < right) {
//       tail[left] = nums[i] //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
//       //       console.log(tail)
//     }
//   }
//   return tail
// }
