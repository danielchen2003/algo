let result = []
let path = []
var combine = function (n, k) {
  result = []
  const combineHelper = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path])
      return
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
      path.push(i)
      combineHelper(n, k, i + 1)
      path.pop()
    }
  }

  combineHelper(n, k, 1)
  return result
}

var combine = function (n, k) {
  let res = []
  let path = []

  function backtracking(n, k, startIndex) {
    if (path.length === k) {
      res.push([...path])
    }
    for (let i = startIndex; i < n - (k - path.length) + 1; i++) {
      res.push(i)
      backtracking(n, k, startIndex + 1)
      res.pop
    }
  }
  backtracking(n, k, 1)
  return res
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
      helper(tar - c[idx], [...arr, c[idx]], idx)
    }
  }
  helper(tar, [], 0)
  return res
}

var combinationSum = function (c, tar) {
  let res = []

  function helper(c, tar, index, path) {
    if (tar == 0) {
      res.push([...path])
      return
    }
    let n = c[index]

    helper(c, tar, index + 1, path) //下层递归，1 -> 2 ->3

    if (target - sum > 0) {
      helper(c, tar - n, index, [...path, c[index]]) //同层递归, 4 -> 2 ->2
    }
  }
  helper(c, tar, 0, [])
  return res
}
