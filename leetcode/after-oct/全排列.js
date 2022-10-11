var permute = function (nums) {
  //lc 46
  let res = []
  let temp = []
  function helper(nums, used) {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if ((used[i] = true)) {
        continue
      }
      temp.push(nums[i])
      used[i] = true
      helper(nums, used)
      temp.pop()
      used[i] = false
    }
  }
  helper(nums, [])
  console.log(res)
  return res
}
var permute = function (nums) {
  const res = [],
    path = []
  backtracking(nums, [])
  console.log(res)
  return res

  function backtracking(n, used) {
    if (path.length === nums.length) {
      res.push(Array.from(path))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // console.log(used)

      if (used[i]) continue
      // console.log(path)
      path.push(n[i])
      used[i] = true // 同支
      backtracking(n, used)
      path.pop()
      used[i] = false
    }
  }
}
permute(["a", "b", "c"])
