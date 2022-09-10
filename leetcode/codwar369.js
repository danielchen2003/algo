// function longestSubstringOf(s) {
//   //coding and coding..
//   var max = 1
//   var longstr = ""
//   for (var i = 0; i < s.length - 1; i++) {
//     for (var j = i; j <= s.length; j++) {
//       var curr = s.slice(i, j)
//       var dupli = new Set(curr)
//       if (curr.length === dupli.size && curr.length > max) {
//         max = curr.length
//         longstr = curr
//       }
//     }
//   }
//   return max + longstr
//   //   扫描 0-strlen  i
//   //   j++
//   //   x = slice(i j)
//   //   如果 x set =slice
//   //   max = str.length
//   //   return max
// }

function longestSubstringOf(s) {
  let max = 0
  // let l = 0
  let r = 0
  let seen = []
  while (r < s.length) {
    if (seen.indexOf(s[r]) === -1) {
      seen.push(s[r])
    } else {
      seen.shift()
      r--
    }
    max = Math.max(max, seen.length)
    r++
  }
  return max
}

s = "baacabd"
console.log(longestSubstringOf(s))

// moduel.export =isvaild()