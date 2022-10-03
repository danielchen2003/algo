var findMaxConsecutiveOnes = function (nums) {
  let sum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    sum = (sum + 1) * nums[i]
    max = Math.max(max, sum)
  }
  return max
}

let nums = [1, 1, 0, 1, 1, 1]
console.log(findMaxConsecutiveOnes(nums))

// cur = 0
// maximum = 0
// for num in nums:
//     cur = (cur+num)*num
//     if cur > maximum:
//         maximum = cur
// return maximum
