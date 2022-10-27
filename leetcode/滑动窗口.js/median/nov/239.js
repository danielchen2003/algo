var maxSlidingWindow = function (nums, k) {
  let res = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    console.log(nums.slice(i, i + k))
    let max = helper(nums, i, i + k - 1)
    res.push(max)
  }
  console.log(res)
  return res
  function helper(nums, i, j) {
    let res = nums[i]
    for (let k = i; k <= j; k++) {
      res = Math.max(res, nums[k])
    }
    return res
  }
}
// let nums = [1, 3, -1, -3, 5, 3, 6, 7]
// maxSlidingWindow(nums, 3)

function topKFrequent(nums, k) {
  const countMap = new Map()
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }
  // console.log(countMap)
  // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
  console.log([
    ...countMap
      .entries()
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((i) => i[0]),
  ])

  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0])
}

function topKFrequent3(nums, k) {
  const countMap = new Map()
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }
  let res = [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((x) => x[0])
  console.log(res)
}

let nums = [1, 1, 1, 2, 2, 3],
  k = 2
// topKFrequent3(nums, k)
nums.splice(1, 2, 10)
console.log(nums)
