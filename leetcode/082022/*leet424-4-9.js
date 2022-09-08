// 424. 替换后的最长重复字符
var characterReplacement = function (s, k) {
  const num = new Array(26).fill(0)
  const n = s.length
  let maxn = 0,
    left = 0,
    right = 0

  while (right < n) {
    num[s[right].charCodeAt() - "A".charCodeAt()]++
    maxn = Math.max(maxn, num[s[right].charCodeAt() - "A".charCodeAt()])
    console.log(num)
    if (right - left + 1 - maxn > k) {
      num[s[left].charCodeAt() - "A".charCodeAt()]--
      left++
    }
    right++
  }
  return right - left
}

// 到这一步一景开始数数了 abcd的aarray已经开始填写了
var characterReplacement = function (s, k) {
  let seen = new Array(26).fill(0)
  let n = s.length
  let maxlength = 0,
    l = 0,
    r = 0
  while (r < n) {
    seen[s[r].charCodeAt() - "A".charCodeAt()]++
    console.log(seen)
    r++
  }
}

var characterReplacement = function (s, k) {
  let seen = new Array(26).fill(0)
  let n = s.length
  let maxlength = 0,
    l = 0,
    r = 0
  while (r < n) {
    seen[s[r].charCodeAt() - "A".charCodeAt()]++
    console.log(seen)
    //比较一下已经有的最长的长度和右边字母 在 seen 里面瓶绿次数
    maxlength = Math.max(maxlength, seen[s[r].charCodeAt() - "A".charCodeAt()])

    // console.log(maxlength)
    console.log(l + "r" + r)
    if (r - l + 1 - maxlength > k) {
      seen[s[l].charCodeAt() - "A".charCodeAt()]--

      l++
    }
    r++
  }
  return r - l
}

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
    console.log(map)
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
  return s.length - left
}

let s = "AAAAABCCASGDEQWE"
let k = 1
console.log(characterReplacement(s, k))


如: s = "AABABBA", k = 1

max 记录窗口内相同字符最多的次数

遍历字符串, 窗口往右扩张
一旦 窗口大小 大于 max + k, 则窗口左边收缩 (因为窗口内最多可替换 k个其他字符 为 出现最多的字符)

窗口扩张: left: 0, right: 0, 窗口: [ A ]ABABBA
窗口扩张: left: 0, right: 1, 窗口: [ AA ]BABBA
窗口扩张: left: 0, right: 2, 窗口: [ AAB ]ABBA
窗口扩张: left: 0, right: 3, 窗口: [ AABA ]BBA
移动左边: left: 1, right: 4, 窗口: A[ ABAB ]BA
移动左边: left: 2, right: 5, 窗口: AA[ BABB ]A
移动左边: left: 3, right: 6, 窗口: AAB[ ABBA ] 

遍历完后, 只要看窗口大小即可

//窗口在运动的过程中不断被扩大，虽然最后框到的值不是我们需要的结果，但是窗口长度是不会缩小的正式我们需要的长度