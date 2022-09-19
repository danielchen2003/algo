var getRow = function (numRows) {
  if (numRows < 0) {
    return []
  }
  // 定义二维dp
  const dp = []
  for (let i = 1; i <= numRows + 1; i++) {
    dp.push(new Array(i).fill(null))
  }
  console.log(dp)
  // 处理子问题
  for (let i = 0; i < numRows + 1; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i][0] = 1
      dp[i][dp[i].length - 1] = 1
    }
  }
  console.log(dp)
  // 处理状态转移方程
  for (let i = 0; i < numRows + 1; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp[numRows]
}

// var getRow = function (numRows) {
//   // 第一步basecase
//   if (numRows <= 0) return []
//   if (numRows == 1) return [1]
//   //初始化dp
//   let dp = []
//   for (let i = 0; i < numRows; i++) {
//     dp.push(Array(i).full(null)) //[[],[],[],[]]
//   }
//   console.log(dp)
//   //第二部 初始化df
//   for (let i = 0; i < numRows; i++) {
//     let row = dp[i]
//     for (let j = 0; j < row.length; j++) {
//       dp[i][row.length - 1] = 1
//       dp[i][0] = 1
//     }
//   }

//   console.log(dp)
//   for (let i = 0; i < numRows; i++) {
//     let row = dp[i]
//     for (let j = 0; j < row.length; j++) {
//       dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
//     }
//   }
//   return dp[numRows]
// }

rowIndex = 3
console.log(getRow(rowIndex))
