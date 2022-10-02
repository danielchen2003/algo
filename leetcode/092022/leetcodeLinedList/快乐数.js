var isHappy = function (n) {
  let m = new Map()

  const getSum = (num) => {
    let sum = 0
    while (n) {
      sum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    return sum
  }

  while (true) {
    // n出现过，证明已陷入无限循环
    if (m.has(n)) return false
    if (n === 1) return true
    m.set(n, 1)
    n = getSum(n)
  }
}

var isHappy = function (n) {
  let m = new Map()

  function getSum(nums) {
    let sum = 0
    while (nums !== 0) {
      sum += Math.pow(nums % 10, 2)
      nums = Math.floor(nums / 10)
    }
    return sum
  }
  while (true) {
    let curSum = getSum(n)
    if (curSum === 1) return true
    if (m.has(curSum)) {
      return false
    } else {
      m.set(curSum, 1)
    }
  }
}
// var myData = new Object()

// myData[10427] = "Description 10427"
// myData[10504] = "Description 10504"
// myData[10419] = "Description 10419"

// for (var key in myData) {
//   console.log("key is" + key)
// }

var myData = new Map()
myData.set(10427, "Description 10427")
myData.set(10504, "Description 10504")
myData.set(10419, "Description 10419")
console.log(myData)
myData.forEach((value, key) => console.log(key, value))
