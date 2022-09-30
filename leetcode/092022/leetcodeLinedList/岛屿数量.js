var numIslands = function (grid) {
  //深度优先
  let count = 0
  let m = grid.length
  let n = grid[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return //下标越界或不是陆地，返回
    grid[i][j] = "0" //将陆地置为水，避免后续访问重复计算这个位置
    //检验它的上下左右方向有没有陆地
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        //找到陆地
        dfs(i, j) //找到这个陆地所属的一整块岛屿，整个岛屿原本的的'1'都被置为'0'
        count++ //岛屿数量增加
      }
    }
  }
  // console.log(grid)
  return count
}
var numIslands = function (grid) {
  let count = 0
  let m = grid.length
  let n = grid[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0) return
    grid[i][j] = "0"
    dfs(i, j + 1)
    dfs(i, j - 1)
    dfs(i - 1, j)
    dfs(i + 1, j)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j)
        count++
      }
    }
  }
  return count
}


void dfs(let[][] grid, int r, int c) {
  // 判断 base case
  // 如果坐标 (r, c) 超出了网格范围，直接返回
  if (!inArea(grid, r, c)) {
      return;
  }
  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
// boolean inArea(int[][] grid, int r, int c) {
//   return 0 <= r && r < grid.length 
//         && 0 <= c && c < grid[0].length;
// }
function dfs(grid,i,j){
  if(!inArea(grid,i,j)){
    return;
  }
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}
function inArea(grid,i,j){
  return 0 <= r && r < grid.length 
        && 0 <= c && c < grid[0].length;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]

console.log(numIslands(grid))
// int numIslands(vector<vector<char>>& grid) {
//   int count = 0;  //初始化岛屿数量
//   for(int i = 0; i < grid.size(); i++)
//   {
//       for(int j = 0; j < grid[0].size(); j++)
//       {
//           if(grid[i][j] == '1')
//           {
//               count++;    //每遍历到一个‘1’，岛屿数量加1
//               dfs(grid, i, j);
//           }
//       }
//   }
//   return count;
// }


var numIslands = function(grid) {
  let count = 0;  //初始化岛屿数量
  for(let i = 0; i < grid.size(); i++)
  {
      for(let j = 0; j < grid[0].size(); j++)
      {
          if(grid[i][j] == '1')
          {
              count++;    //每遍历到一个‘1’，岛屿数量加1
              dfs(grid, i, j);
          }
      }
  }
  return count;

  function dfs(grid,i,j){
    if(!inArea(grid,i,j)){
      return;
    }
     if (grid[i][j] != 1) {
          return;
      }
      grid[i][j] = 2;
      count++
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  }
  
  
  function inArea(grid,r,c){
    return 0 <= r && r < grid.length 
          && 0 <= c && c < grid[0].length;
  }
}
  