var permute = function (nums) {
  //lc 46
  let res = []
  let temp = []
  function helper(nums, []) {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      temp.push(nums[i])
      used[i] = true
      if ((used[i] = true)) {
        continue
      }
      helper(nums, [])
      temp.pop()
      used[i] = false
    }
  }
  helper(nums, [])
}
var permute = function (nums) {
  const res = [],
    path = []
  backtracking(nums, nums.length, [])
  return res

  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path))
      return
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true // 同支
      backtracking(n, k, used)
      path.pop()
      used[i] = false
    }
  }
}
