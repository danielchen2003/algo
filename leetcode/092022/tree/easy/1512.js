var numIdenticalPairs = function (nums) {
  let seen = new Array(100).fill(0)
  // console.log(seen)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    // seen[nums[i]]++
    res += seen[nums[i] - 1]
    seen[nums[i] - 1]++
  }
  console.log(seen)
  return res
}

console.log(numIdenticalPairs([1, 23, 4, 1, 23, 23, 23]))
