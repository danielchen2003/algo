var maximumUniqueSubarray = function (nums) {
  let start = 0

  let sum = 0
  let res = -Infinity
  let hashmap = new Map()
  for (let end in nums) {
    let tail = nums[end]
    sum += tail
    hashmap.set(tail, (hashmap.has(tail) ? hashmap.get(tail) : 0) + 1)
    if (end - start + 1 == hashmap.size) {
      res = Math.max(res, sum)
    }
    while (end - start + 1 > hashmap.size && end < nums.length) {
      let head = nums[start]
      hashmap[head] -= 1
      if (hashmap[head] == 0) {
        hashmap.delete(head)
      }
      sum -= nums[start]
      start += 1
    }
  }
  return res
}

var maximumUniqueSubarray = function (nums) {
  let sum = 0
  let res = -Infinity
  let j = 0
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    // 窗口不满足条件，即有重复元素时
    while (set.has(nums[i])) {
      set.delete(nums[j]) // 删掉该元素
      sum -= nums[j] // 更新需要维护的变量
      j++
    }
    set.add(nums[i]) // 最后加入该元素
    res = Math.max(res, sum) // 此时都是符合题意要求的，可以直接更新res值
  }
  return res
}

var maximumUniqueSubarray = function (nums) {
  let sum = 0
  let res = -Infinity
  let start = 0
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    let tail = nums[i]
    sum += tail
    while (set.has(tail)) {
      let head = nums[start]
      set.delete(head)
      sum -= head
      start++
    }
    set.add(nums[i])
    res = Math.max(res, sum)
  }
  return res
}
