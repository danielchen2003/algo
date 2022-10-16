function topKFrequent(nums, k) {
  const countMap = new Map()
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }
  console.log(
    [...countMap]
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((x) => x[0])
  )
  // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
  return [...countMap]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0])
  // [...countMap.entries()]
}

let nums = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7],
  k = 2
console.log(topKFrequent(nums, k))
