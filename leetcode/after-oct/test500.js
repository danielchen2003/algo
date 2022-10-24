var isAnagram = function (s, t) {
  let pivot = "a".charCodeAt(0)
  let seen = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    seen[s.charCodeAt(i) - pivot]++
  }

  for (let j = 0; j < t.length; j++) {
    seen[t.charCodeAt(j) - pivot]--
  }
  console.log(seen)
  for (let num of seen) {
    if (num !== 0) {
      return false
    }
  }
  return true
}

let s = "anagram",
  t = "nagaram"
isAnagram(s, t)
