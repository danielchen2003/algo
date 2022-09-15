var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  let arr = x.toString().split("")
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (x[i] !== x[j]) {
      return false
    }
  }
  return true
}

var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  let n = 10 ** Math.floor(Math.log10(x))
  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false
    let z = x % n
    x = Math.floor((x % n) / 10)
    n /= 100
  }
  return true
}

var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  let n = Math.floor(Math.log10(x))
  while (n > 1 && x > 0) {
    if (Math.floor(x % n) === x % 10) {
      n = n / 100
      x = Math.floor((x % n) / 10)
    } else {
      return false
    }
  }
  return true
}

console.log(isPalindrome(93211239))

// console.log(80998 % 10)
