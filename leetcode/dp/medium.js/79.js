var exist = function (board, word) {
  //越界处理
  board[-1] = [] // 这里处理比较比较巧妙，利用了js的特性
  board.push([])

  //寻找首个字母
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (word[0] === board[y][x] && dfs(word, board, y, x, 0)) return true
    }
  }
  return false
}
const dfs = function (word, board, y, x, i) {
  if (i + 1 === word.length) return true
  var tmp = board[y][x]
  // 标记该元素已使用
  board[y][x] = false
  if (board[y][x + 1] === word[i + 1] && dfs(word, board, y, x + 1, i + 1))
    return true
  if (board[y][x - 1] === word[i + 1] && dfs(word, board, y, x - 1, i + 1))
    return true
  if (board[y + 1][x] === word[i + 1] && dfs(word, board, y + 1, x, i + 1))
    return true
  if (board[y - 1][x] === word[i + 1] && dfs(word, board, y - 1, x, i + 1))
    return true
  // 回溯
  board[y][x] = tmp
}

// var exist = function (board, word) {}

var exist = function (board, word) {
  const W = board.length
  const H = board[0].length
  const K = word.length

  //搜索的方向
  const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ]
  function helper(i, j, k) {
    if (k >= K) return true
    if (i >= W || j >= H || i < 0 || j < 0) return false

    if (board[i][j] !== word[k]) return false
    board[i][j] = "*"
    for (let [x, y] of dirs) {
      if (helper(i + x, j + y, k + 1)) return true
    }
    board[i][j] = word[k]
    return false
  }
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      if (helper(i, j, 0)) return true
    }
  }
  return false
}

var exist3 = function (board, word) {
  let [col, row] = [board.length, board[0].length]
  let len = word.length
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] == word[0]) {
        if (helper(i, j, 0)) return true
      }
    }
  }

  function helper(i, j, index) {
    if (i < 0 || j < 0 || i >= col || j >= row || word[index] !== board[i][j])
      return false
    if (index === len - 1) return true
    let temp = board[i][j]
    board[i][j] = false
    let res =
      helper(i + 1, j, index + 1) ||
      helper(i - 1, j, index + 1) ||
      helper(i, j + 1, index + 1) ||
      helper(i, j - 1, index + 1)
    board[i][j] = temp
    if (res === true) return true
    else return false
  }

  return false
}
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]
console.log(exist3(board, "ESEEB"))
