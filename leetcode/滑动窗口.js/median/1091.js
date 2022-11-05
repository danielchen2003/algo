var shortestPathBinaryMatrix = function (grid) {
  let [m, n] = [grid.length, grid[0].length]

  if (gird[0][0] == "1" || gird[m][n] == "1") return -1

  let direction = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ]
  let q = [[0, 0]]
  while (q.length) {
    depth++
    let size = q.length
    for (let i = 0; i < size; i++) {
      let [x, y] = q.shift()
      if (x === m && y === n) {
        return depth
      }
      for (let dir of direction) {
        let cur_x = x + dir[0]
        let cur_y = y + dir[1]
        if (
          cur_x < 0 ||
          cur_x > m ||
          cur_y < 0 ||
          cur_y > n ||
          grid[(cur_x, cur_y)] === 1
        ) {
          continue
        }
        q.push([cur_x, cur_y])
        grid[cur_x][cur_u] = 1
      }
    }
  }
  return -1
}
