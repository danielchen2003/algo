var findAnagrams = function (s, p) {
  let res = []
  let map_s = new Map()
  let map_p = new Map()
  for (let c of p) {
    if (!map_p.has(c)) map_p[c] = 1
    else map_p[c]++
  }
  let start = 0
  for (let end in s) {
    if (!map_p.has(s[end])) map_p[s[end]] = 1
    else map_p[s[end]]++
    if (map_s === map_p) {
      res.push(start)
    }
  }
}
