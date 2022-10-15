var isAnagram = function (s, t) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) obj[s[i]] = obj[s[i]] + 1
    else obj[s[i]] = 1
  }
  for (let i in t) {
    if (obj[t[i]]) obj[t[i]] = obj[t[i]] - 1
    else obj[t[i]] = -1
  }
  console.log(obj)
  for (let key in s) {
    if (obj[key] === 0) {
      return false
    }
  }
  return true
}

let s = "anagram",
  t = "nagaram"
console.log(isAnagram(s, t))
