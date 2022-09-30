// var firstUniqChar = function (s) {
//   let map = {}
//   s.split("").forEach((c) => {
//     if (c in map) map[c] + 1
//     else map[c] = 1
//   })
//   let count = 0
//   for (let c in map) {
//     if (map[c] === 1) count++
//   }
//   return count
// }

// var firstUniqChar = function (s) {
//   let map = {}
//   let res
//   s.split("").forEach((c, i) => {
//     if (c in map) map[c] = map[c] + 1
//     else {
//       map[c] = 1
//       res =
//     }
//   })
//   console.log(map)
//   console.log(res)
//   for (let c in map) {
//     if (map[c] === 1) return res[c]
//   }
//   return -1
// }

var firstUniqChar = function (s) {
  let arr = new Array(26).fill(0)
  // console.log(s.charCodeAt(0) - "a".charCodeAt(0))
  let n = s.length
  for (let i = 0; i < n; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++
  }
  for (let i = 0; i < n; i++) {
    if (arr[s.charCodeAt(i) - "a".charCodeAt(0)] == 1) {
      return i
    }
  }
  // console.log(arr)
  return -1
}

var firstUniqChar = function (s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  console.log(map)
  let res = 0
  for (let [k, length] of map.entries()) {
    if (length === 1) res++
    // console.log(k)
    // console.log(length)
  }

  return res
}
let s = "loveleetcode"
console.log(firstUniqChar(s))
