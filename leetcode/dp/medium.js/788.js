var rotatedDigits = function (N) {
  let ans = 0
  const d = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1].concat(
    Array(Math.max(0, N - 9)).fill(0)
  )
  for (let i = 0; i <= N; ++i) {
    if (d[Math.floor(i / 10)] == -1 || d[i % 10] == -1) {
      d[i] = -1
    } else if (d[Math.floor(i / 10)] == 1 || d[i % 10] == 1) {
      d[i] = 1
      ++ans
    }
  }
  // console.log(d)
  // return d.reduce((pre, cur) => {
  //   return (pre += cur > 0 ? cur : 0)
  return ans
  // })
}
// 10
//  2 5 6 9
//11
//  2 5 6 9
// 12
//  2 5 6 9 12  21
// 51
// 13
// 5
// 14
// 5
// 15
// 21

// 12  1

function rotatedDigits4(N) {
  let count = 0
  for (let i = 1; i <= N; i++) {
    if (isGood(i)) {
      count++
    }
  }
  return count
}

function isGood(n) {
  const map = []
  map[3] = 0
  map[4] = 0
  map[7] = 0
  map[2] = 1
  map[5] = 1
  map[6] = 1
  map[9] = 1
  console.log(map)
  let flag = false
  while (n > 0) {
    const item = n % 10
    console.log(item)
    if (map[item] === 0) {
      flag = false
      break
    }
    if (map[item] === 1) {
      flag = true
    }
    n = Math.floor(n / 10)
  }
  return flag
}
console.log(rotatedDigits(3))
