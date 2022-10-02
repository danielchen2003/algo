function isAnagram(s, t) {
  if (s.length !== t.length) return false
  let helperArr = new Array(26).fill(0)
  let pivot = "a".charCodeAt(0)
  for (let i = 0, length = s.length; i < length; i++) {
    helperArr[s.charCodeAt(i) - pivot]++
    console.log(helperArr)
    helperArr[t.charCodeAt(i) - pivot]--
  }

  return helperArr.every((i) => i === 0)
}

let s = "anagram"
let t = "nagaram"
console.log(isAnagram(s, t))

function isAnagram(s, t) {
  if (s.length !== t.length) return false
  let memo = new Array(26).fill(0)

  let pivot = "a".charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    memo[s[i].charCodeAt(0) - pivot]++
    memo[t[i].charCodeAt(0) - pivot]--
  }
  let res = memo.every((x) => x === 0)
  return res
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false
  let memo = new Map()

  let pivot = "a".charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    if (memo.get(s[i]) === undefined) {
      memo.set(s[i], 1)
    } else {
      memo.set(s[i], memo.get(s[i]) + 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (memo.get(s[i]) === undefined) {
      return false
    } else {
      memo.set(s[i], memo.get(s[i]) - 1)
    }
  }
  for (let i in memo) {
    if (memo.get(i) !== 0) {
      return false
    }
  }
  return true
}
