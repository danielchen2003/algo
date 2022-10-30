// const letterCombinations = (digits) => {
//   const map = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   }
//   if (!digits.length) return []
//   let q = [""]

//   for (let i = 0; i < digits.length; i++) {
//     let level = q.length
//     for (let j = 0; j < level; j++) {
//       let cur = q.shift()
//       let str = map[digits[i]]
//       for (let char of str) {
//         q.push(cur + char)
//       }
//     }
//   }
//   return q
// }

// let str = "ab"
// console.log(letterCombinations(str))

// text = "  this   is  a sentence "
// console.log(text.trim().replace(/ +/g, " ").split(" "))

var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b)
  let l = nums.slice(0, Math.ceil(nums.length / 2)).reverse()
  console.log(l)
  let r = nums.slice(Math.ceil(nums.length / 2)).reverse()
  console.log(r)
  for (let i = 0; i * 2 < nums.length; i++) nums[2 * i] = l[i]
  for (let i = 0; i * 2 + 1 < nums.length; i++) nums[2 * i + 1] = r[i]
  console.log(nums)
}

let nums = [1, 5, 1, 1, 6, 4]
wiggleSort(nums)
