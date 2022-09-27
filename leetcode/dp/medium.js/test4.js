var sumZero = function (n) {
  let res = []
  let sum = 0
  for (let i = 0; i <= n - 2; i++) {
    res.push(i)
    sum += i
  }
  res.push(-sum)
  // console.log(res)
  return res
}
console.log(sumZero(2))

var reverseWords = function (s) {
  let arr = s.split(" ")
  arr.forEach((x, i) => {
    let word = x.split("")
    word.reverse()
    return word.join("")
  })
  return arr.join(" ")
}
