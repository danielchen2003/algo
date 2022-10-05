var combinationSum = function (candidates, target) {
  const ans = []
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return
    }
    if (target === 0) {
      ans.push(combine)
      return
    }
    // 直接跳过
    dfs(target, combine, idx + 1)
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
    }
  }

  dfs(target, [], 0)
  return ans
}

var combinationSum = function (c, tar) {
  let res = []
  let len = c.length
  function helper(tar, arr, idx) {
    if (idx === len) {
      return
    }
    if (tar < 0) return
    if (tar === 0) {
      res.push(arr)
      return
    }
    helper(tar, arr, idx + 1)
    if (tar - c[idx] >= 0) {
      arr.push(c[idx])
      helper(tar - c[idx], arr, idx)
    }
  }
  helper(tar, [], 0)
  return res
}

var combinationSum = function (c, t) {
  let res = []
  let len = c.length
  function dfs(c, arr, t, i) {
    if (i === len) return
    if (t < 0) return
    if (t === 0) {
      res.push(arr)
    }

    if (t - c[i] > 0) {
      dfs(c, [...arr, c[i]], t - c[i], i) //当前位置再尝试一次
    }
    dfs(c, arr, t, i + 1) //下一个位置尝试
  }
  dfs(c, [], t, 0)
  return res
}
