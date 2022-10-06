var isAnagram = function (s, t) {
  let map = new Array(26).fill(0)
  for (let x of t) {
    let charIndex = x.charCodeAt() - "a".charCodeAt()
    map[charIndex]++
  }

  for (let x of s) {
    let charIndex = x.charCodeAt() - "a".charCodeAt()
    map[charIndex]--
  }
  console.log(map)
  for (let x of map) {
    if (x !== 0) return false
  }
  return true
}
let s = "anagram"
let t = "nagaram"

console.log(isAnagram(s, t))
console.log("A".charCodeAt(0))
// 65 97
