function tictactoe(moves) {
  let length = moves.length
  let countTicTacToe = new Array(length).fill(0)

  for (let i = length - 1; i >= 0; i++) {
    //check Row
    countTicTacToe[moves[i][0]]++
    //check Column
    countTicTacToe[moves[i][1]]++
    //check 对角线
    if (moves[i][0] === moves[i][1]) {
      countTicTacToe[6]++
    }
    if (moves[i][0] + moves[i][1] == 2) {
      countTicTacToe[7]++
    }
  }

  for (let i = 0; i < countTicTacToe.length; i++) {
    if (countTicTacToe[i] === 3) {
      return length % 2 == 1 ? "A" : "B"
    }
  }
  if (length !== 9) return "pending"
  else return "Draw"
}
