var getSum = function (a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1
    console.log(carry)
    a = a ^ b

    b = carry
  }
  return a
}

let a = 7
let b = 15
getSum(a & 0)
