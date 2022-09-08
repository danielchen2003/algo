// let removeElement = function (nums, val) {
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   console.log(nums, val)
//   return nums.length
// }
//  i++
// console.log(removeElement([3, 2, 2, 3], 2))

let removeElement = function (nums, val) {
  let slow = 0 //慢指针
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow++] = nums[i]

      // console.log(nums[slow])
    }
  }
  // console.log(nums, val)
  return slow
}
//                         3!=2 num0 = 3  2=2   2=2  3!=2 num1 = 3
// console.log(removeElement([3, 2, 2, 2, 2, 3, 3, 2, 2], 2))

// var trap = function (height) {}

// var removeDuplicates = function (nums) {
//   const remove = new Set(nums)
//   console.log(remove)
//   return remove.size
// }

var removeDuplicates = function (nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] === nums[fast]) {
      continue
    } else {
      nums[slow + 1] = nums[fast]
      slow++
    }
  }
  console.log(slow)
  return nums
}
// i      j

var removeDuplicates2 = function (nums) {
  if (nums.length < 2) return nums.length
  let slow = 2
  // let count = 0
  let fast = 2
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      ++slow
    }
    fast++
  }

  console.log(slow)
  return nums
}

console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// for (int right = 0; right < nums.length; right++) {
//   if (left < 2 || nums[right] != nums[left - 2])
//       nums[left++] = nums[right];
// }
// return left;

var removeDuplicates3 = function (num) {
  if (num.length <= 2) return num.length
  let j = 2
  for (let i = 2; i < num.length; i++) {
    if (num[i] !== num[j - 2]) {
      num[j] = num[i]
      j++
    }
  }
  return num
}
console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
