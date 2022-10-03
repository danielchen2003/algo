// var getSum = function (a, b) {
//   while (b !== 0) {
//     let carry = (a & b) << 1
//     console.log(carry)
//     a = a ^ b

//     b = carry
//   }
//   return a
// }

// let a = 1
// let b = 111
// getSum(a & b)
// // console.log(1 & 111)

const a = 5 //  00000000000000000000000000010101
const b = 2 //  00000000000000000000000000000010
const c = -5 //  11111111111111111111111111111011

console.log(a >>> 0) //  00000000000000000000000000000001
// expected output: 1

console.log(c >>> 0) //  00111111111111111111111111111110
// expected output: 1073741822
