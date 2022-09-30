// class Solution {
//   //可以看图理解，在加上记住这个模板。
//   public int maxAreaOfIsland(int[][] grid) {
//       //定义一个表示岛屿的面积
//       int max = 0;
//       //这两个for循环是来遍历整张二维格上的所有陆地的。
//       //i 表示行，j表示列
//       for(int i = 0;i<grid.length;i++){
//           for(int j = 0; j<grid[0].length;j++){
//               //陆地的格
//               if(grid[i][j]==1){
//                   //取出最大的面积
//                   max = Math.max(max,dfs(grid,i,j));
//               }
//           }
//       }
//       //返回最大的陆地面积
//       return max;
//   }
//   public int  dfs(int[][] grid,int i,int j){
//       //当超出岛屿边界（上下左右）的时候，就直接退出，特别要加上当遍历到海洋的时候也要退出，
//       if(i<0||j<0 || i>=grid.length || j>= grid[0].length|| grid[i][j]==0) return 0;
//      //定义一个变量表示岛屿的面积，就是包含几个陆地
//       int sum = 1;
//       //将陆地改为海洋，防止重复陆地重复遍历。
//       grid[i][j] =0;
//       //遍历上方元素，每遍历一次陆地就加一
//       sum += dfs(grid,i+1,j);
//       //遍历下方元素
//       sum +=dfs(grid,i-1,j);
//       //遍历右边元素
//       sum +=dfs(grid,i,j+1);
//       //遍历左边元素
//       sum += dfs(grid,i,j-1);
//       return sum;
//   }
// }

var maxAreaOfIsland = function (grid) {
  let row = grid.length,
    col = grid[0].length
  function dfs(x, y) {
    //越界判断 当grid[x][y] === 0时 直接返回
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0
    grid[x][y] = 0 //当grid[x][y] === 1时，将当前单元格置为0
    let ans = 1,
      dx = [-1, 1, 0, 0],
      dy = [0, 0, 1, -1] //方向数组
    for (let i = 0; i < dx.length; i++) {
      //上下左右不断递归，计算每个岛屿的大小
      ans += dfs(x + dx[i], y + dy[i])
    }
    return ans
  }
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res = Math.max(res, dfs(i, j)) //循环网格 更新最大岛屿
    }
  }
  return res
}

var maxAreaOfIsland = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let max = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        max = Math.max(max, dfs(grid, i, j))
      }
    }
  }
  function dfs(grid, i, j) {
    if (notInArea(grid, i, j)) return 0
    if (grid[i][j] !== 1) {
      return 0
    }
    grid[i][j] = 2
    return (
      dfs(grid, i + 1, j) +
      dfs(grid, i - 1, j) +
      dfs(grid, i, j + 1) +
      dfs(grid, i, j - 1) +
      1
    )
  }
  function notInArea(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid.length) {
      return true
    }
  }
  return max
}
