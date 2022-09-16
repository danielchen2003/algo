var plusOne = function (digits) {
  digits[digits.length - 1] = digits[digits.length - 1] + 1
  // console.log(digits)
  return digits
}

console.log(plusOne([1, 2, 3]))

var plusOne = function (digits) {
  let cur = digits.length - 1
  while (cur >= 0) {
    if (digits[cur] !== 9) {
      digits[cur]++
      return digits
    } else {
      digits[cur] = 0
    }
    cur--
  }
  return [1, ...digits]
}
