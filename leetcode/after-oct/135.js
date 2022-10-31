var candy = function (ratings) {
  if (ratings.length == 1) return 1
  let len = ratings.length
  let count_candy = new Array(len).fill(1)

  for (let i = 1; i < len; i++) {
    if (ratings[i] < ratings[i - 1]) {
      count_candy[i] = count_candy[i - 1] + 1
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      count_candy[i] = Math.max(count_candy[i], count_candy[i + 1] + 1)
    }
  }
  console.log(count_candy)
  return count_candy.reduce((acc, cur) => acc + cur, 0)
}

let ratings = [1, 2, 2]
console.log(candy(ratings))
