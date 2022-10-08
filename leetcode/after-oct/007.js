var reverse = function (x) {
  let res = 0
  x = Math.abs(x)
  while (x !== 0) {
    console.log(x)
    let tail = x % 10
    let newres = res * 10 + tail
    if (Math.floor(newres / 10) !== res) {
      return 0
    }
    res = newres
    x = Math.floor(x / 10)
  }
}
let x = -123
console.log(reverse(x))
