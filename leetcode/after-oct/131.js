var partition = function (s) {
  const res = [],
    path = [],
    len = s.length
  backtracking(0)
  return res
  function backtracking(i) {
    if (i >= len) {
      res.push(Array.from(path))
      return
    }
    for (let j = i; j < len; j++) {
      if (!isPalindrome(s, i, j)) continue
      path.push(s.slice(i, j + 1))
      backtracking(j + 1)
      path.pop()
    }
  }
}
const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}
