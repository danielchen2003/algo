var maxLengthBetweenEqualCharacters = function (s) {
  let seen = {}
  let res = -1
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] !== undefined) {
      res = Math.max(i - seen[s[i]] - 1, res)
    } else seen[s[i]] = i
    console.log(seen)
  }
  return res
}
s = "abca"

console.log(maxLengthBetweenEqualCharacters(s))
