var numSubarraysWithSum = function (nums, goal) {
  let sum = 0
  let memo = {}
  memo[0] = 1
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    if (!memo[sum]) {
      memo[sum] = 1
    } else {
      memo[sum]++
    }
    count += memo[sum - goal] || 0
  }
  return count
}

// var numSubarraysWithSum = function (nums, goal) {
//   let sum = 0
//   const cnt = new Map()
//   let ret = 0
//   for (const num of nums) {
//     cnt.set(sum, (cnt.get(sum) || 0) + 1)
//     sum += num
//     ret += cnt.get(sum - goal) || 0
//   }
//   console.log(cnt)
//   return ret
// }

let nums = [1, 0, 1, 0, 1],
  goal = 2
console.log(numSubarraysWithSum(nums, goal))

var numSubarraysWithSum = function (nums, goal) {
  const n = nums.length
  const map = new Map()
  let preSum = 0
  let ret = 0
  map.set(0, 1)
  for (let i = 0; i < n; i++) {
    preSum += nums[i]
    ret += map.get(preSum - goal) || 0
    map.set(preSum, (map.get(preSum) || 0) + 1)
  }
  return ret
}

var numSubarraysWithSum = function (nums, goal) {
  let n = nums.length
  let sum = 0
  let map = {}
  let res = 0
  Object.assign(map, { 0: 1 })
  nums.forEach((x, i) => {
    sum += x
    let cur = sum - goal
    res += map[cur] || 0
    map[sum] = (map[sum] || 0) + 1
  })
  return res
}

var numSubarraysWithSum = function (nums, goal) {}
