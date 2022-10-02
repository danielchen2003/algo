var lengthOfLongestSubstringTwoDistinct = function (s) {
  let map = new Map()
  let left = 0
  res = 0
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i)
    map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1)
    while (map.size > 2) {
      let c = s.charAt(left)
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) map.delete(c)
      left++
    }
    res = Math.max(res, i - left + 1)
  }
  return res
}

var lengthOfLongestSubstringTwoDistinct = function (s) {
  let res = 0
  let hashmap = {}
  let start = 0
  for (let end = 0; end < s.length; end++) {
    let tail = s[end]
    // console.log(tail)
    // console.log(Object.keys(hashmap))
    hashmap[tail] = (hashmap[tail] || 0) + 1
    if (Object.keys.length <= 2) {
      res = Math.max(res, end - start + 1)
    }
    console.log(hashmap)
    while (Object.keys.length > 2) {
      head = s[start]
      hashmap[head] -= 1
      if (hashmap[head] === 0) {
        delete hashmap[head]
      }
      start += 1
    }
  }
  return res
}

var lengthOfLongestSubstringTwoDistinct = function (s) {
  let res = 0
  let hashmap = new Map()
  let start = 0
  for (let end = 0; end < s.length; end++) {
    console.log(end)
    let tail = s[end]
    // console.log(tail)
    // console.log(Object.keys(hashmap))
    hashmap.set(tail, hashmap.has(tail) ? hashmap.get(tail) + 1 : 1)
    // if (!hashmap.has(tail)) hashmap.set(tail,1)
    // if (hashmap.has(tail)) hashmap.set(tail, hashmap.get(tail)+=1)
    if (hashmap.size <= 2) {
      res = Math.max(res, end - start + 1)
    }
    console.log(hashmap)
    while (hashmap.size > 2) {
      let head = s[start]
      console.log(head)
      hashmap.set(head, hashmap.get(tail) - 1)
      if (hashmap.get(head) === 0) {
        hashmap.delete(head)
      }
      start += 1
    }
  }
  return res
}
let s = "ccaabbb"
console.log(lengthOfLongestSubstringTwoDistinct(s))
