var characterReplacement = function (s, k) {
  // 用来记录滑动窗口内字母出现的次数
  let map = new Array(26).fill(0)
  let left = 0,
    right = 0,
    max = 0
  while (right < s.length) {
    // 一个字母进入窗口，在map中将次数加一，并且更新最大字母重复次数
    let char = s[right]
    let index = char.charCodeAt() - "A".charCodeAt()
    map[index]++
    max = Math.max(max, map[index])
    // 判断当前窗口的字符串是否符合规则，
    // 如果当前窗口长度减去最大字母出现次数 的值 大于最大替换次数 K
    // 则不符合规则 所以整个窗口往左移动，left++ 且要将 map中记录的值减去
    if (right - left + 1 - max > k) {
      map[s[left].charCodeAt() - "A".charCodeAt()]--
      left++
    }
    right++
  }
  return right - left
}

var characterReplacement = function (s, k) {
  let arr = new Array(26).fill(0)
  let l = 0
  let r = 0
  let maxWindowSize = 0
  let res = 0
  for (; r < s.length; r++) {
    let curindex = s.charCodeAt(r) - "A".charCodeAt(0)
    arr[curindex]++ // 这是求出arr里面 当前字母和a 的差值比如A = arr[0]++ [1,0...26字母]
    let maxWindowSize = Math.max(maxWindowSize, arr[curindex])
    while (r - l + 1 - maxWindowSize > k) {
      //这总长度 大于k 了超过了要减东西了
      let leftindex = s.charCodeAt(l) - "A".charCodeAt(0)
      arr[leftindex]--
      l++
    }
    res = Math.max(res, r - l + 1)
  }
  return res
}
