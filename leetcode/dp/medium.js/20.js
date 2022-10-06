let isValid = function (s) {
  let stack = []
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  for (const c of s) {
    //! 如果有 c 那么就 推进去并且继续检查下一个
    if (c in map) {
      stack.push(c) //!推不进去因为它不是key
      continue
    }
    console.log(stack)
    if (map[stack.pop()] !== c)
      //这时候是反括号
      return false
  }
  if (stack.length === 0) return true
  else return false
}

let isValid2 = function (s) {
  let stack = []
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  for (let c in s) {
    if (c in map) {
      stack.push(c)
      continue
    } else {
      console.log(stack)
      if (map[stack.pop()] !== c) return false
    }
  }
  if (stack.length === 0) return true
  else return false
}
let s = "([{}]){[]}()"

console.log(isValid2(s))

var isValid = function (s) {
  let s = []()
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      s.push(s[i])
      continue
    } else {
      let cur = s.pop()
      if (cur !== s[i]) {
        return false
      }
    }
  }
  if (s.length === 0) return true
  else return false
}
