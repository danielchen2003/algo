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
// for (let i = 0; i < digits2.length; i++) {
//   console.log(digits2[i])
// }

var letterCombinations = function (digits) {
  let phone_map = new Map()
  // phone_map.set(0,'')
  // phone_map.set(1,'')
  phone_map.set(2, "abc")
  phone_map.set(3, "def")
  phone_map.set(4, "ghi")
  phone_map.set(5, "jkl")
  phone_map.set(6, "mno")
  phone_map.set(7, "pqrs")
  phone_map.set(8, "tuv")
  phone_map.set(9, "wxyz")
  let result = []
  let path = []
  function tryDiffrentNums(digits, startIndex) {
    if (startIndex > digits.length - 1) {
      return
    }
    if (path.length == digits.length) {
      result.push([...path])
    }

    let curNum = digits[startIndex]
    let curChar
    if (phone_map.has(curNum)) {
      curChar = phone_map.get(curNum)
    }
    for (let i = 0; i < curChar.length; i++) {
      path.push(curChar[i])
      tryDiffrentNums(digits, startIndex + 1)
      path.pop()
    }
  }
  tryDiffrentNums(digits, 0)
  return res
}

// const letterCombinations = (digits) => {
//   if (digits.length == 0) return []
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

//   const queue = []
//   queue.push("")
//   for (let i = 0; i < digits.length; i++) {
//     // bfs的层数，即digits的长度
//     const levelSize = queue.length // 当前层的节点个数
//     for (let j = 0; j < levelSize; j++) {
//       // 逐个让当前层的节点出列
//       const curStr = queue.shift() // 出列

//       const letters = map[digits[i]]

//       for (const l of letters) {
//         queue.push(curStr + l) // 生成新的字母串入列
//       }
//     }
//   }
//   return queue // 队列中全是最后一层生成的字母串
// }

var letterCombinations4 = function (digits) {
  const k = digits.length
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  if (!k) return []
  if (k === 1) return map[digits].split("")

  const res = [],
    path = []
  backtracking(digits, 0)
  return res

  function backtracking(n, a) {
    if (a > digits.length - 1) {
      res.push(path.join(""))
      return
    }
    // console.log(path.length == k)
    // if (path.length === k) {

    // }
    for (const v of map[n[a]]) {
      path.push(v)
      backtracking(n, a + 1)
      path.pop()
    }
  }
}

const letterCombinations5 = (digits) => {
  if (digits.length == 0) return []
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }

  const queue = []
  queue.push("")
  for (let i = 0; i < digits.length; i++) {
    // bfs的层数，即digits的长度
    const levelSize = queue.length // 当前层的节点个数
    console.log(queue)
    for (let j = 0; j < levelSize; j++) {
      // 逐个让当前层的节点出列
      const curStr = queue.shift() // 出列

      const letters = map[digits[i]]

      for (const l of letters) {
        queue.push(curStr + l) // 生成新的字母串入列
      }
    }
  }
  return queue // 队列中全是最后一层生成的字母串
}

let digits3 = "23"
console.log(letterCombinations5(digits3))
