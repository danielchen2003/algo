// function hamming(n) {
//   var seq = [1]
//   var i2 = 0,
//     i3 = 0,
//     i5 = 0
//   for (var i = 1; i < n; i++) {
//     var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5])
//     console.log(x)
//     console.log(seq[i2])
//     // console.log(i2, i3, i5)
//     seq.push(x)
//     if (2 * seq[i2] <= x) i2++
//     if (3 * seq[i3] <= x) i3++
//     if (5 * seq[i5] <= x) i5++
//   }
//   return seq[n - 1]
// }

// function hamming(n) {
//   let i2,
//     i3,
//     i5 = 0
//   let res = []
//   let count = 0
//   for (let j = 0; j < n; j++) {
//     let x = Math.min(2 ^ (i2 + 3) ^ (i3 + 5) ^ i5)
//     res.push(x)
//   }
//   return res
// }

// hamming(10)

// function hamming(n) {
//   let i2 = 0
//   let i3 = 0
//   let i5 = 0
//   let res = []
//   for (let i = n; i > 0; i++) {
//     let r2 = Math.pow(2, res[i2])
//     let r3 = Math.pow(3, res[i3])
//     let r5 = Math.pow(5, res[i5])
//     let n = Math.min(r2, r3, r5)
//     res.push(n)
//     if (Math.pow(2, res[i2]) <= n) {
//       i2++
//     }
//     if (Math.pow(3, res[i3]) <= n) {
//       i3++
//     }
//     if (Math.pow(5, res[i5]) <= n) {
//       i2++
//     }
//   }
//   return res[n - 1]
// }
// console.log(hamming(10))

// function hamming(n) {
//   var seq = [1]
//   var i2 = 0,
//     i3 = 0,
//     i5 = 0
//   for (var i = 1; i < n; i++) {
//     var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5])
//     seq.push(x)
//     if (2 * seq[i2] <= x) i2++
//     if (3 * seq[i3] <= x) i3++
//     if (5 * seq[i5] <= x) i5++
//   }
//   return seq[n - 1]
// }

// function hamming(n) {
//   let seq = [1]
//   let i2 = 0
//   let i3 = 0
//   let i5 = 0
//   for (let i = 1; i < n; i++) {
//     let x = Math.min(seq[i2] * 2, seq[i3] * 3, seq[i5] * 5)
//     seq.push(x)
//     console.log(seq)
//     if (seq[i2] * 2 <= x) i2++
//     if (seq[i3] * 3 <= x) i3++
//     if (seq[i5] * 5 <= x) i5++
//   }
//   return seq[n - 1]
// }
console.log(hamming(10))

function hamming(n) {
  let seq = [1]
  let i2 = 0,
    i3 = 0,
    i5 = 0
  // let r2, r3, r5
  while (seq.length < n) {
    let r2 = seq[i2] * 2
    let r3 = seq[i3] * 3
    let r5 = seq[i5] * 5
    const x = Math.min(r2, r3, r5)
    seq.push(x)
    console.log(seq)
    if (r2 === x) i2++
    if (r3 === x) i3++
    if (r5 === x) i5++
  }
  return seq.pop()
}
