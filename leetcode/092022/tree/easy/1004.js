var longestOnes = function (nums, k) {
  let map = {}
  let start = 0
  let max =0
  for (let end = 0; end < nums.length; end++) {
    let cur = nums[end]
    map[cur] = (map[cur] || 0) + 1
    if (map[0] <= k) {
      max = Math.max(max, end- start +1)
    }
    while (map[0] > k) {
      let head = nums[start]
      map[head] -=1
      start++
    }
  }
  return max
}

max_len, hashmap = 0, {}

start =  0
for end in range(len(nums)):
    tail = nums[end]
    hashmap[tail] = hashmap.get(tail, 0) + 1
    if hashmap.get(0, 0) <= k:
        max_len = max(max_len, end - start + 1)

    # 相比较于上一题，只需要把1改成k
    while hashmap.get(0, 0) > k:
        head = nums[start]
        hashmap[head] -= 1
        start += 1
return max_len
