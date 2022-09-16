var lengthOfLastWord = function (s) {
  let str = s.trim()
  let arr = str.split(" ")
  return arr[-1]
}

// let s = console.log(lengthOfLastWord(s))

var lengthOfLastWord = function (s) {
  return s.trimEnd().split(" ").at(-1)
}

var lengthOfLastWord = function (s) {
  let start
  let tail = s.length - 1
  let res = 0
  while (s[tail] == " ") {
    tail--
  }
  while (s[tail] !== " ") {
    tail--
    res++
  }
  return res
}

let a = "hello    world   "
console.log(lengthOfLastWord(a))

var lengthOfLastWord = function (s) {
  let end = s.length - 1
  while (end >= 0 && s[end] == " ") end--
  if (end < 0) return 0
  let start = end
  while (start >= 0 && s[start] != " ") start--
  return end - start
}
