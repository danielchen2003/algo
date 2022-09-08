function minSubArrayLen(arr, target) {
  if (arr[0] === target) return 1
  let sum = 0
  let left = 0
  let right = 0
  const length = arr.length

  let result = length + 1 // infinite

  // console.log(result)
  while (right < length) {
    sum += arr[right++]
    while (sum >= target) {
      // result = result < right - left ? result : right - left

      result = Math.min(right - left, result)
      sum -= arr[left++]
    }
  }
  console.log(result >= length ? 0 : result)
  return result >= length + 1 ? 0 : result
}

// var minSubArrayLen = function(target, nums) {

//   const len = nums.length;
//   let l = r = sum = 0,
//       res = len + 1; // 子数组最大不会超过自身
//   while (r < len) {
//       sum += nums[r++];
//       // 窗口滑动
//       while (sum >= target) {
//           // r始终为开区间 [l, r)

//                 res = Math.min(r - l, res)
//           sum -= nums[l++];
//       }
//   }
//   return res > len ? 0 : res;
// };

// if (targets[0] >= target) {
//   return 1
// }
// let i = 0,
//   j = 0
// let sum = 0
// let min = 0
// while (j <= targets.length) {
//   if (sum < target) {
//     sum += targets[j]
//     j++
//   } else {
//     min = min === 0 ? j - i : Math.min(min, j - i)
//     sum -= targets[i]
//     i++
//     if (sum >= target) {
//       min = min === 0 ? j - i : Math.min(min, j - i)
//     }
//   }
// }
// return min

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
// Write a function called minSubArrayLen which accepts two parameters - an array
// of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

let maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let area = 0
  while (l < r) {
    currentHeight = Math.min(height[l], height[r])
    area = Math.max(area, (r - l) * currentHeight)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return area
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

var lengthOfLongestSubstring = function (s) {
  let res = 0,
    temp = []
  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) == -1) {
      //数组中无被遍历的值
      temp.push(s[i]) //将不重复的值去除
    } else {
      temp.shift() //因为有重复值出现，去除第一个元素
      i-- //控制i的值，将刚才重复的值重新压入数组
      continue //不再进行res的赋值
    }
    res = Math.max(res, temp.length) //Math.max(a, b)选出两个值中较大的那个值
  }
  return res
}

// let lengthOfLongestSubstring = function (s) {
//   let res = 0,
//     temp = []
//   for (let i = 0; i < s.length; i++) {
//     if (temp.indexOf(s[i] == -1)) {
//       temp.push(s[i])
//     } else {
//       temp.shift()
//       i--
//       continue
//     }
//     res = Math.max(res, temp.length)
//   }
//   return res
// }

// console.log(lengthOfLongestSubstring("pwwkew"))

let characterReplacement = function (s, k) {
  // 用来记录滑动窗口内字母出现的次数
  let map = new Array(26).fill(0)
  // console.log(map)
  let left = 0,
    right = 0,
    max = 0
  while (right < s.length) {
    // 一个字母进入窗口，在map中将次数加一，并且更新最大字母重复次数
    let char = s[right]
    let index = char.charCodeAt() - "A".charCodeAt()
    map[index]++
    max = Math.max(max, map[index])
    // 判断当前窗口的字符串是否符合规则，
    // 如果当前窗口长度减去最大字母出现次数 的值 大于最大替换次数 K
    // 则不符合规则 所以整个窗口往左移动，left++ 且要将 map中记录的值减去
    if (right - left + 1 - max > k) {
      map[s[left].charCodeAt() - "A".charCodeAt()]--
      left++
      console.log(map)
    }
    right++
  }
  return right - left
}

console.log(characterReplacement("AABABBACCABCCC", 2))

function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) - array[i - 1].charCodeAt(0) > 1) {
      return String.fromCharCode(array[i].charCodeAt(0) - 1)
    }
  }
}
