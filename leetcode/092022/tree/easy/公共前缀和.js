var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ""
  let ans = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) break
    }
    ans = ans.substr(0, j)
    if (ans === "") return ans
  }
  return ans
}

var longestCommonPrefix = function (strs) {
  if (!strs) return ""
  let model = strs[0]
  // console.log(strs[0])
  for (let i = 1; i < strs.length; i++) {
    // console.log(strs[i])
    for (let j = Math.min(model.length, strs[i].length); j >= 0; j--) {
      if (strs[i][j] !== model[j]) {
        break
      }
    }
    model = model.substr(0, j)
    if (model.length === 0) return ""
  }
  return model
}

strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs))
