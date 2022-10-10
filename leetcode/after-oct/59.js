var generateMatrix = function (n) {
  let left = 0
  let right = n - 1
  let top = 0
  let bot = n - 1
  let matrix = new Array(n).fill(1).map((x) => new Array(n).fill(1))
  let val = 1
  // for (let i = 0; i < n; i++) {

  // }
  while (true) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = val ^ 2
      val++
    }
    top++
    if (top >= bot) {
      break
    }
    for (let i = top; i <= bot; i++) {
      matrix[i][right] = val ^ 2
      val++
    }
    right--
    if (right <= left) {
      break
    }

    for (let i = right; i >= left; i--) {
      matrix[bot][i] = val ^ 2
      val++
    }
    bot--
    if (top >= bot) {
      break
    }
    for (let i = bot; i >= top; i--) {
      matrix[i][left] = val ^ 2
      val++
    }
    left++
    if (left >= right) {
      break
    }
  }
  return matrix
}
