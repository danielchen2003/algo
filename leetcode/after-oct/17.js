// var letterCombinations = function (digits) {
//   const k = digits.length
//   const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
//   if (!k) return []
//   if (k === 1) return map[digits].split("")

//   const res = [],
//     path = []
//   backtracking(digits, k, 0)
//   console.log(res)
//   return res

//   function backtracking(n, k, a) {
//     if (path.length === k) {
//       res.push(path.join(""))
//       return
//     }
//     for (const v of map[n[a]]) {
//       console.log(n[a])
//       path.push(v)
//       backtracking(n, k, a + 1)
//       path.pop()
//     }
//   }
// }

// // var letterCombinations = function (digits) {
// //   let len = digits.length
// //   const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
// //   if (!len) return []
// //   if (len == 1) return map[digits].split("")
// //   let res = []
// //   let path = []
// //   console.log(digits[0])
// //   backtracking(digits, len, 0)
// //   return res
// //   function backtracking(n, len, i) {
// //     if (path.len === len) {
// //       res.push(path.join(""))
// //       return
// //     }
// //     console.log(n)
// //     for (let letter of map[n[i]]) {
// //       path.push(letter)
// //       backtracking(len, i + 1)
// //       path.pop()
// //     }
// //   }
// // }

// let digits = "23"

// letterCombinations(digits)
let digits2 = "23"
for (let i = 0; i < digits2.length; i++) {
  console.log(digits2[i])
}
