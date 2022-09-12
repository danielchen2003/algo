function printUnsorted(arr, n) {
  let s = 0,
    e = n - 1,
    i,
    max,
    min
  // step 1(a) of above algo
  for (s = 0; s < n - 1; s++) {
    if (arr[s] > arr[s + 1]) break
  }
  if (s == n - 1) {
    console.log("The complete array is sorted")
    return
  }
  // step 1(b) of above algo
  for (e = n - 1; e > 0; e--) {
    if (arr[e] < arr[e - 1]) break
  }
  // step 2(a) of above algo
  max = arr[s]
  min = arr[s]
  for (i = s + 1; i <= e; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  // step 2(b) of above algo
  for (i = 0; i < s; i++) {
    if (arr[i] > min) {
      s = i
      break
    }
  }
  // step 2(c) of above algo
  for (i = n - 1; i >= e + 1; i--) {
    if (arr[i] < max) {
      e = i
      break
    }
  }
  // step 3 of above algo
  console.log(
    " The unsorted subarray which" +
      " makes the given array sorted lies" +
      "  between the indees " +
      s +
      " and " +
      e
  )
  return arr.slice(s, e + 1).sort((a, b) => a - b)
}
let arr1 = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]
let arr2 = [1, 2, 323, 45656, 2, 2, 345, 6, 2, 2]
let arr_size = arr1.length

//先用生序排列一次 看看几个重合 再用降序排列一次看看几个重合

function printUnsorted2(arr) {
  const length = arr.length
  const inc = arr.sort((a, b) => a - b)
  const dec = arr.sort((a, b) => b - a)
  let i = 0
  for (i of arr) {
    for (let j of inc) {
      if (i !== j) {
        break
      }
    }
  }
  let x
  for (x = length - 1; x >= 0; x--) {
    for (let y = length - 1; y >= 0; y--) {
      if (arr[x] !== inc[y]) {
        break
      }
    }
  }
  return [i, arr[x]]
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false
    }
  }
  return true
}

function printUnsortedleetcode(arr) {
  if (arr === null || arr === undefined) {
    return null
  }
  if (arr.length <= 1) return arr

  const length = arr.length

  if (isSorted(arr)) return length

  const inc = [...arr].sort((a, b) => a - b)

  // console.log(inc)
  // console.log(arr)
  let i = 0
  while (arr[i] === inc[i]) {
    i++
    if (arr[i] !== inc[i]) break
  }
  let j = length - 1
  while (arr[j] === inc[j]) {
    j--
    if (arr[j] !== inc[j]) break
  }
  return j - i + 1
}

var findUnsortedSubarray = function (nums) {
  if (isSorted(nums)) {
    return 0
  }
  const numsSorted = [...nums].sort((a, b) => a - b)
  let left = 0
  while (nums[left] === numsSorted[left]) {
    left++
  }
  let right = nums.length - 1
  while (nums[right] == numsSorted[right]) {
    right--
  }
  return right - left + 1
}

// const isSorted = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] < nums[i - 1]) {
//           return false;
//       }
//   }
//   return true;
// }

// 我们可以假设把这个数组分成三段，左段和右段是标准的升序数组，中段数组虽是无序的，但满足最小值大于左段的最大值，最大值小于右段的最小值。

// 那么我们目标就很明确了，找中段的左右边界，我们分别定义为begin 和 end;
// 分两头开始遍历:

// 从左到右维护一个最大值max,在进入右段之前，那么遍历到的nums[i]都是小于max的，我们要求的end就是遍历中最后一个小于max元素的位置；
// 同理，从右到左维护一个最小值min，在进入左段之前，那么遍历到的nums[i]也都是大于min的，要求的begin也就是最后一个大于min元素的位置。

// var findUnsortedSubarray = function (nums) {
//   if (nums == undefined) return null
//   const length = nums.length
//   let leftmax = nums[0]
//   let rightmin = nums[nums.length - 1]
//   let left = 0
//   let right = length - 1
//   for (let i = 0; i < length; i++) {
//     if (nums[i] < leftmax) {

//       left = i
//     }else{
//       leftmax = Math.max(leftmax, nums[i])
//     }
//   }
//   for (let j = right; j >= 0; j--) {
//     if (nums[j] < rightmin) {
//       leftmin = Math.min(rightmin, nums[j])
//       right = j
//     }
//   }

//   return right - left + 1
// }

var findUnsortedSubarray2 = function (nums) {
  let max = -Infinity
  let min = Infinity

  //先找到最小 然后找到要插入的位置
  let sorted = false
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      sorted = true
    }
    if (sorted) {
      min = Math.min(min, nums[i])
    }
  }
  sorted = false
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      sorted = true
    }
    if (sorted) {
      max = Math.max(max, nums[i])
    }
  }
  let l, r
  for (l = 0; l < nums.length; l++) {
    if (nums[l] > min) {
      break
    }
  }
  for (r = nums.length - 1; r >= 0; r--) {
    if (nums[r] < max) {
      break
    }
  }
  return r - l < 0 ? 0 : r - l + 1
}

let test1 = [2, 6, 4, 8, 10, 9, 15]
console.log(findUnsortedsubArray4(test1))

// function

// [2, 6, 4, 8, 10, 9, 15]

//   min          max
//                6  8  10
//   start         end
//     6            5

function findUnsortedsubArray4(nums) {
  let n = nums.length
  let max = -Infinity
  let min = Infinity
  let start = 0
  let end = 0
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i])
    if (nums[i] < max) end = i
  }
  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i])
    if (nums[i] > min) start = i
  }
  return end - start + 1
}
