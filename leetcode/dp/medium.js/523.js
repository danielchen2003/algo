var checkSubarraySum = function (nums, k) {
  let acc = 0
  let map = new Map()
  map.set(0, 1)
  for (let num of nums) {
    acc += num
    console.log(map)
    let cur = k - acc
    if (map.has(cur)) {
      return true
    }
    if (!map.has(acc)) {
      map.set(acc, 1)
    } else {
      map.set(acc, map.get(acc) + 1)
    }
  }
  return false
}

var checkSubarraySum2 = function (nums, k) {
  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]
    //细节1，防止 k 为 0 的情况
    let key = k == 0 ? sum : sum % k
    if (map.containsKey(key)) {
      if (i - map.get(key) >= 2) {
        return true
      }
      //因为我们需要保存最小索引，当已经存在时则不用再次存入，不然会更新索引值
      continue
    }
    map.put(key, i)
  }
  return false
}

let nums = [23, 2, 4, 6, 7]
let k = 6
console.log(checkSubarraySum2(nums, k))
