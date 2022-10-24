var minWindow = function (s, t) {
  // 需要的
  let need = {}
  // 窗口中的字符
  let window = {}
  for (let a of t) {
    // 统计需要的字符
    need[a] = (need[a] || 0) + 1
  }
  // 左右指针
  let left = 0,
    right = 0
  let valid = 0
  // 最小覆盖子串的起始索引及长度
  let start = 0,
    len = Number.MAX_VALUE
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right]
    // 右移窗口
    right++
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++
      }
    }
    // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
    while (valid == Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left
        len = right - left
      }
      //即将移出窗口的字符
      let d = s[left]
      // 左移窗口

      left++
      if (need[d]) {
        if (window[d] < need[d]) {
          //比如have 有4 个 need3个 have-1不影响 只有hav3 3 need 3-1影响
          valid--
        }
        window[d]--
      }
    }
  }
  return len == Number.MAX_VALUE ? "" : s.slice(start, len)
}
let s = "ADOBECODEBANC",
  t = "ABC"
minWindow(s, t)

var minWindow = function (s, t) {
  let len = s.length
  let tar = {}
  let window = {}
  for (let x of t) {
    tar[x] = (tar[x] || 0) + 1
  }

  let l = 0
  let r = 0
  let start = 0
  let valid = 0
  let minLen = Infinity
  while (r < len) {
    let curChar = s[r]
    if (tar[curChar]) {
      window[curChar] = (window[curChar] || 0) + 1
      if (window[curChar] == target[curChar]) {
        valid += 1
      }
    }

    while (valid == Objects.keys(tar).length) {
      if (right - left < minLen) {
        //一旦找到更小的
        start = left
        minLen = right - left
      }
      let removeChar = s[left]
      if (need[removeChar]) {
        window[removeChar]--
        if (window[removeChar] < need[removeChar]) {
          valid--
        }
        left++
      }
    }
    return minLen == Infinity ? "" : s.slice(start, right)
    //如果tar全满足开始计数
  }
}

//

const minWindow = (s, t) => {
  let minLen = s.length + 1
  let start = s.length // 结果子串的起始位置
  let map = {} // 存储目标字符和对应的缺失个数
  let missingType = 0 // 当前缺失的字符种类数
  for (const c of t) {
    // t为baac的话，map为{a:2,b:1,c:1}
    if (!map[c]) {
      missingType++ // 需要找齐的种类数 +1
      map[c] = 1
    } else {
      map[c]++
    }
  }
  let l = 0,
    r = 0 // 左右指针
  for (; r < s.length; r++) {
    // 主旋律扩张窗口，超出s串就结束
    let rightChar = s[r] // 获取right指向的新字符
    if (map[rightChar] !== undefined) map[rightChar]-- // 是目标字符，它的缺失个数-1
    if (map[rightChar] == 0) missingType-- // 它的缺失个数新变为0，缺失的种类数就-1
    while (missingType == 0) {
      // 当前窗口包含所有字符的前提下，尽量收缩窗口
      if (r - l + 1 < minLen) {
        // 窗口宽度如果比minLen小，就更新minLen
        minLen = r - l + 1
        start = l // 更新最小窗口的起点
      }
      let leftChar = s[l] // 左指针要右移，左指针指向的字符要被丢弃
      if (map[leftChar] !== undefined) map[leftChar]++ // 被舍弃的是目标字符，缺失个数+1
      if (map[leftChar] > 0) missingType++ // 如果缺失个数新变为>0，缺失的种类+1
      l++ // 左指针要右移 收缩窗口
    }
  }
  if (start == s.length) return ""
  return s.substring(start, start + minLen) // 根据起点和minLen截取子串
}
