var combinationSum = function (candidates, target) {
  const res = [],
    path = []
  candidates.sort((a, b) => a - b) // 排序
  backtracking(0, 0)
  return res
  function backtracking(j, sum) {
    if (sum === target) {
      res.push(Array.from(path))
      return
    }
    for (let i = j; i < candidates.length; i++) {
      const n = candidates[i]
      if (n > target - sum) break
      path.push(n)
      sum += n
      backtracking(i, sum)
      path.pop()
      sum -= n
    }
  }
}

var combinationSum = function (candidates, target) {
  if (!candidates) {
    return []
  }
  candidates.sort((a, b) => a - b)
  let res = []
  let sum = 0
  function bt(target, path, index) {
    if (target === sum) {
      res.push([...path])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] + sum > target) {
        break
      }
      sum += candidates[i]
      path.push(candidates[i])
      bt(sum, path, i)
      path.pop()
      sum -= candidates[i]
    }
  }
  bt(target, [], 0)
  return res
}

var combinationSum = function (candidates, target) {
  const res = [],
    path = []
  candidates.sort((a, b) => a - b) // 排序
  backtracking(0, 0)
  return res
  function backtracking(j, sum) {
    if (sum === target) {
      res.push(Array.from(path))
      return
    }
    for (let i = j; i < candidates.length; i++) {
      const n = candidates[i]
      if (n > target - sum) break
      path.push(n)
      sum += n
      backtracking(i, sum)
      path.pop()
      sum -= n
    }
  }
}
