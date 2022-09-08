// var findRepeatedDnaSequences = function (s) {
//   const L = 10
//   const ans = []
//   const cnt = new Map()
//   const n = s.length
//   for (let i = 0; i <= n - L; ++i) {
//     const sub = s.slice(i, i + L)
//     cnt.set(sub, (cnt.get(sub) || 0) + 1)
//     if (cnt.get(sub) === 2) {
//       ans.push(sub)
//     }
//   }
//   return ans
// }
s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// let findRepeatedDnaSequences = function (s) {
//   const l = 10
//   const cache = new Map()
//   const ans = []
//   const n = s.length
//   for (let i = 0; i < n; i++) {
//     console.log(cache)
//     const subarr = s.slice(i, i + l)
//     cache.set(subarr, (cache.get(subarr) || 0) + 1)
//     if (cache.get(subarr) > 1) {
//       ans.push(subarr)
//     }
//   }
//   return ans
// }

let findRepeatedDnaSequences = function (s) {
  let l = 10
  let n = s.length
  let ans = []
  let cache = new Map()
  for (let i = 0; i < n; i++) {
    let sub = s.slice(i, i + l)
    cache.set(sub, (cache.get(sub) || 0) + 1)
    if (cache.get(sub) === 2) {
      ans.push(sub)
    }
  }
  return ans
}
console.log(findRepeatedDnaSequences(s))
