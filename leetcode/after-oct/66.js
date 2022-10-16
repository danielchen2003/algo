var plusOne = function (digits) {
  let cur = digits.length - 1
  let jinwei = 0
  while (cur >= 0) {
    if (digits[cur] !== 9) {
      digits[cur] += 1 + jinwei
      jinwei = 0
    } else {
      digits[cur] = 0
      jinwei = 1
    }
    cur--
  }
  if (jinwei == 1) return [1, ...digits]
  else return digits
}

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
