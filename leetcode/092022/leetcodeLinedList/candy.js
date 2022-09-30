var candy = function (ratings) {
  let candys = new Array(ratings.length).fill(1)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1
    }
  }
  console.log(candys)
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candys[i], candys[i + 1] + 1)
    }
  }
  console.log(candys)
  let count = candys.reduce((a, b) => {
    return a + b
  })

  return count
}

var candy2 = function (ratings) {
  let candys = new Array(ratings.length).fill(1)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1
    }
  }
  console.log(candys)
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i + 1] > ratings[i]) {
      candys[i] = Math.max(candys[i], candys[i + 1])
    }
  }
  return candys.reduce((a, b) => a + b)
}
let ratings = [5, 1, 0, 2, 3]
console.log(candy2(ratings))

let left = 0
let right = 10
const mid = (left + (right - left)) >> 1
console.log(mid)
