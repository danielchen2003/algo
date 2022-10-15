// let s = "3-2x+5 = -3 +5+x"
// let regux = /(?=[-+])/
// let arr = s.split("=")
// // console.log(arr)
// let left = arr[0].split(regux)
// let right = arr[1].split(regux)
// // console.log(left)
// // console.log(right)
// let str = "3.4.5?5=."
// let re = /(?=[.?])/
// console.log(str.split("."))
// var solveEquation = function (equation) {
//   let [left, right] = equation.split("=") //左边右边分开
//   let fn = (s) => {
//     let op = "+",
//       count = 0,
//       add = 0 //运算符 默认+ count数x add数数字
//     for (let i = 0; i < s.length; i++) {
//       if (["+", "-"].includes(s[i])) {
//         op = s[i] //确定运算符
//       }
//       if (s[i] === "x") {
//         count += op === "+" ? 1 : -1 //
//       }
//       if (s[i] >= "0" && s[i] <= "9") {
//         let num = +s[i]
//         while (s[i + 1] >= "0" && s[i + 1] <= "9") {
//           num = num * 10 + +s[i + 1]
//           i++
//         }
//         if (s[i + 1] === "x") {
//           count += (op === "+" ? 1 : -1) * num
//           i++
//         } else {
//           add += (op === "+" ? 1 : -1) * num
//         }
//       }
//     }
//     return [count, add]
//   }
//   let [countL, addL] = fn(left)
//   let [countR, addR] = fn(right)
//   if (countL === countR && addL === addR) return "Infinite solutions"
//   let count = countL - countR,
//     add = addR - addL
//   if (count === 0) return "No solution"
//   return `x=${add / count}`
// }

let expression = "-1/2+1/2+1/3"
let regx = /(?=[+-])|[/]/g
let arr = expression.split(regx)
for (let x of arr) {
  console.log(parseInt(x))
}
