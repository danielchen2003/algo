var isStrobogrammatic = function (num) {
  const map = new Map([
    ["6", "9"],
    ["9", "6"],
    ["8", "8"],
    ["1", "1"],
    ["0", "0"],
  ])

  let mum = num.split("").reverse().join("")
  for (let i = 0; i < num.length; i++) {
    let n = map.get(num[i])
    // console.log(isNaN(n))
    if (isNaN(n) || n != mum[i]) return false
  }
  return true
}
console.log(isStrobogrammatic("66 99"))
