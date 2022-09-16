let a = ["101"]
let b = ["1101"]

function add(a, b) {
  let numA = parseInt(a, 2)
  let numB = parseInt(b, 2)
  console.log(numA)
  let res = numA + numB
  return res.toString(2)
}

// console.log(add(a, b))

function add(a, b) {
  let x = parseInt(a, 2)
  let y = parseInt(b, 2)
  while (y) {
    res = x ^ y
    console.log(res)
    carry = (x & y) << 1
    console.log(carry)
    x = res
    y = carry
  }
  return x.toString(2)
}
console.log(add(a, b))
