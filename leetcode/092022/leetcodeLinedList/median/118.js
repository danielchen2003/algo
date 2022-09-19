var generate = function (numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    let level = new Array(i + 1).fill(1)

    for (let j = 1; j <= level.length - 2; j++) {
      level[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(level)
  }
  return res
}
