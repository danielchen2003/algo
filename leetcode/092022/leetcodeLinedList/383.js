var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt()
  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++
  }
  console.log(strArr)
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base
    if (strArr[index] == "0") return false
    strArr[index]--
  }
  return true
}
let ransomNote = "aaa",
  magazine = "aabb"
canConstruct(ransomNote, magazine)
