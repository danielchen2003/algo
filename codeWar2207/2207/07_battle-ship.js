function validateBattlefield(field) {
  let ships = [0, 4, 3, 2, 1] // initialize ships to be found
  const s = (x, y) => field[x] && field[x][y] // formula for "is ship at [x, y]?"
  for (let i = 0; i < 100; i++) {
    // check all spaces in field
    let x = i % 10,
      y = (i / 10) | 0,
      l = 0 // calculate x & y, initialize length
    if (s(x, y)) {
      // ship found at [x, y]?
      if (s(x + 1, y + 1) || s(x - 1, y + 1)) return false // corners touching?
      if (s(x + 1, y) && s(x, y + 1)) return false // sides touching?
      while (s(x + l, y)) {
        field[x + l][y] = 0
        l++
      } // find vertical ship
      while (s(x, y + l)) {
        field[x][y + l] = 0
        l++
      } // find horizontal ship
      if (ships[l]) ships[l]--
      else return false // record found ship
    }
  }
  return ships.every((s) => s === 0) // verify all ships found
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  ])
)

function validateBattlefield(field) {
  const ships = [0, 4, 3, 2, 1]
  const curpoint = (x, y) => {
    // console.log(field[x], field[x][y])
    return field[x] && field[x][y]
  }

  for (let i = 0; i < 10; i++) {
    //长宽
    for (let j = 0; j < 10; j++) {
      let l = 0
      if (curpoint(i, j) == 1) {
        //找到第一艘船
        // try shang xia zuoyou
        if (curpoint(i + 1, j + 1) || curpoint(i - 1, j + 1)) return false
        if (curpoint(i, j + 1) || curpoint(i + 1, j)) return false
        while (curpoint(i + l, y)) {
          //横着找
          field[x + l][y] = 0 // 找过的地方要清零 如何检查+l后越界问题
          l++
        }
        while (curpoint(i, y + l)) {
          //横着找
          field[x][y + l] = 0
          l++
        }
        if (ships[l] > 0) {
          ships[l]--
        } else return false
      }
    }
  }
  return ships.every((s) => s === 0)
}

// console.log([0, 1] && 1)

// function validateBattlefield(field) {
//   var hit = (row, col) =>
//     row < 0 || col < 0 || row > 9 || col > 9 ? 0 : field[row][col]
//   for (var ships = [10, 0, 0, 0, 0], row = 0; row < 10; row++) {
//     for (var col = 0; col < 10; col++) {
//       if (hit(row, col)) {
//         if (hit(row - 1, col - 1) || hit(row - 1, col + 1)) return false // Corner is touching
//         if (hit(row - 1, col) && hit(row, col - 1)) return false // Side is touching
//         if ((field[row][col] += hit(row - 1, col) + hit(row, col - 1)) > 4)
//           return false // Ship is too long
//         ships[field[row][col]]++
//         ships[field[row][col] - 1]--
//       }
//     }
//   }
//   return [0, 4, 3, 2, 1].every((s, i) => s == ships[i])
// }
