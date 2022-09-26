var checkSubarraySum2 = function (nums, k) {
  let sum = 0
  let map = new Map()
  map.set(0, -1)
  for (let i = 0; i < nums.length; ++i) {
    console.log(map)
    sum += nums[i]
    //细节1，防止 k 为 0 的情况
    let key = k == 0 ? sum : sum % k
    if (map.has(key)) {
      if (i - map.get(key) >= 2) {
        return true
      }
      //因为我们需要保存最小索引，当已经存在时则不用再次存入，不然会更新索引值
      continue
    }
    map.set(key, i)
  }
  return false
}
// -1  0   1 2  35
let nums = [23, 2, 4, 6, 7]
let k = 6
console.log(checkSubarraySum2(nums, k))
var checkSubarraySum4 = function (nums) {
  let acc = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    map.set(acc, i)
  }
  console.log(map)
}
let nums2 = [1, 1, 1, 1]
console.log(checkSubarraySum4(nums2))
// 0节点累加和为1  1 为2
// Map(4) { 1 => 0, 2 => 1, 3 => 2, 4 => 3 }
let nums3 = [1, 2, 3, 4]
console.log(checkSubarraySum4(nums3))
var checkSubarraySum5 = function (nums, k) {
  // 前面累加和记录一下，当前除余数是不是等于6-1  比一下i
  let acc = 0
  let map = new Map()
  map.set(0, -1)
  //如果reminder是一样的话那就说明，找到了。因为加不加都一样
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    let accReminder = acc % k
    if (map.has(accReminder)) {
      if (map.get(accReminder) - i >= 2) {
        return true
      }
    }
    map.set(accReminder, i)
  }
  return false
}
