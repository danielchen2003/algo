var lengthOfLongestSubstring = function (s) {
  let len = s.length
  let set = new Set()
  let res = 0
  let left = 0
  for (let right = 0; right < len; right++) {
    let curC = s[right]
    if (!set.has(curC)) {
      set.add(curC)
      res = Math.max(res, set.size)
      continue
    }

    while (set.has(curC)) {
      set.delete(s[left++])
    }
  }
  return res
}
let s = "abcdabcbb"

console.log(lengthOfLongestSubstring(s))

var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let left = 0
  let res = 0
  for (let right = 0; right < s.length; right++) {
    if (!set.has(s[right])) {
      set.add(s[right])
      res = Math.max(res, set.size)
      continue
    }

    while (set.has(s[right])) {
      set.delete(s[left++])
    }
    set.add(s[right])
  }
  return res
}
