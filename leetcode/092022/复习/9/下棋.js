// function tictactoe(moves) {
//   let m = moves.length
//   // 用数组记录0-2行、0-2列、正对角线、副对角线是否已满3个棋子
//   // count[0-2]对应0-2行、count[3-5]对应0-2列、count[6]对应正对角线、count[7]对应副对角线
//   let count = new Array(8).fill(0)

//   // 思路第2步已解释为何只需考虑最后一个落棋的人
//   // 倒序统计此人走棋情况
//   for (let i = m - 1; i >= 0; i -= 2) {
//     // 此棋对行的影响
//     console.log(count)
//     count[moves[i][0]]++
//     // 此棋对列的影响
//     count[moves[i][1] + 3]++
//     // 此棋对正对角线的影响
//     if (moves[i][0] == moves[i][1]) count[6]++
//     // 此棋对副对角线的影响 (
//     // 此处为3x3的情况，其余大小的棋盘可以类推[00 11 22] [02, 11 20]
//     if (moves[i][0] + moves[i][1] == 2) count[7]++
//     // 满3个棋子则胜利
//     if (
//       count[moves[i][0]] == 3 ||
//       count[moves[i][1] + 3] == 3 ||
//       count[6] == 3 ||
//       count[7] == 3
//     )
//       // A先B后 则总长度为偶时 最后为B 反之为A
//       return m % 2 == 0 ? "B" : "A"
//   }

//   // 未胜时，棋盘未下满则继续
//   if (moves.length < 9) return "Pending"
//   // 未胜时，棋盘下满则平局结束
//   return "Draw"
// }
// moves = [
//   [0, 0],
//   [2, 0],
//   [1, 1],
//   [2, 1],
//   [2, 2],
// ]
// console.log(tictactoe(moves))

var MovingAverage = function (size) {
  this.queue = []
  this.size = size
  this.sum = 0
}

MovingAverage.prototype.next = function (val) {
  if (this.queue.length === this.size) {
    this.sum -= this.queue.shift()
  }
  this.queue.push(val)
  this.sum += val
  return this.sum / this.queue.length
}

let movingAverage = new MovingAverage(3)
console.log(movingAverage.next(1)) // 返回 1.0 = 1 / 1
console.log(movingAverage.next(10)) // 返回 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)) // 返回 4.66667 = (1 + 10 + 3) / 3
// 返回 6.0 = (10 + 3 + 5) / 3
console.log(movingAverage.next(5))
