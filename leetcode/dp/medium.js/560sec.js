var subarraySum = function (nums, k) {
  let sum = 0
  let map = new Map()
  let res = 0
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    let cur = sum - k
    if (map.has(cur)) {
      res += map.get(cur)
    }
    map.set(sum, !map.has(sum) ? 1 : map.get(sum) + 1)
  }
  return res
}

// var subarraySum = function (nums, k) {
//   let acc = 0
//   let res = 0
//   let map = new Map()
//   map.set(0, 1)
//   for (let num of nums) {
//     acc += num
//     let cur = acc - k
//     if (map.has(cur)) {
//       res += map.get(cur)
//     }
//     if (map.has(acc)) {
//       map.set(acc, map.get(acc) + 1)
//     } else {
//       map.set(acc, 1)
//     }
//   }
//   return res
// }

var subarraySum = function (nums, k) {
  let sum = 0
  let map = {}
  let res = 0
  map[0] = 1
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    let cur = sum - k
    if (map[cur]) {
      res += map[cur]
    }
    map[sum] = map[sum] ? map.get(sum) + 1 : 1
  }
  return res
}
let nums = [1, 2, 3],
  k = 3

console.log(subarraySum(nums, k))
