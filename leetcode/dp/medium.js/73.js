var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // 同行非0预置为0
        for (let k = 0; k < m; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = "will be 0"
          }
        }
        // 同列非0预置为0
        for (let l = 0; l < n; l++) {
          if (matrix[i][l] !== 0) {
            matrix[i][l] = "will be 0"
          }
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "will be 0") {
        matrix[i][j] = 0
      }
    }
  }
}
