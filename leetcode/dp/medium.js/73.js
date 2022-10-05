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
  console.log(matrix)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "will be 0") {
        matrix[i][j] = 0
      }
    }
  }
}

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]
console.log(setZeroes(matrix))

var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for(let i =0  ; i < m ; i++) {
    for(let j =0  ; j < n ; j++) {
      if(matrix[i][j]===0){
        for
      }
    }
  }


}

var setZeroes = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              row[i] = col[j] = true;
          }
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (row[i] || col[j]) {
              matrix[i][j] = 0;
          }
      }
  }
};