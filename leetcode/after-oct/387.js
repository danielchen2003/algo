var firstUniqChar = function (s) {
  let map = {}
  let res = {}
  s.split("").forEach((c, i) => {
    if (c in map) map[c] = map[c] + 1
    else {
      map[c] = 1
      res[c] = i
    }
  })
  console.log(map)
  console.log(res)
  for (let c in map) {
    if (map[c] === 1) return res[c]
  }
  return -1
}

let s = "loveleetcode"
console.log(firstUniqChar(s))
