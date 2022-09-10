const test1 = [[1, 2], [3, null, 5], [4, 5, 6, 7], [5]]
const test2 = [
  [1, 2, 5, 6, 7, 11],
  [3, 4, 5],
  [4, 6, 7],
  [5, 100],
]

let a = {
  left: {
    val: 99,
    left: { num: 5, left: null, right: null },
    right: { num: 3, left: null, right: null },
  },
  right: {
    val: 55,
    left: { num: 25, left: null, right: null },
    right: { num: 320, left: null, right: null },
  },
  var: 100,
}

// a       100
//       100  99
// console.log(a)
let node = a
console.log(a)

function big(test1) {
  let res = 0
  let curlen = 0
  let bigest = 0
  for (let n of test1) {
    // console.log(n)
    curlenth = n.length
    res = Math.max(curlenth, res)
    for (let z of n) {
      bigest = Math.max(bigest, z)
    }
  }
  return [res, bigest]
}

console.log(big(test1)) //7
console.log(big(test2)) //100
