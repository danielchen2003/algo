var printTree = function (root) {
  /**
   * 获得树的最大高度
   */
  const getMaxHeight = (root) => {
    if (root == null) return 0
    return 1 + Math.max(getMaxHeight(root.left), getMaxHeight(root.right))
  }
  // 这棵树的高度和宽度
  let h = getMaxHeight(root),
    w = Math.pow(2, h) - 1
  let res = Array.from({ length: h }, () => Array.from({ length: w }).fill(""))
  const dfs = (node, row, col) => {
    if (node == null) return
    res[row][col] = node.val.toString()
    let left = node.left,
      right = node.right
    // 最底层所在的层数是h-1  因为索引是从0开始计算的
    let height = h - 1
    // 是计算下一层的列  下一层是在row+1  总的层数是height 相差的层数是 height-(row+1)
    // 当前节点与它的子节点相差的列数 Math.pow(2, height - nextRow);
    let nextRow = row + 1
    let diffCol = Math.pow(2, height - nextRow)
    dfs(left, nextRow, col - diffCol)
    dfs(right, nextRow, col + diffCol)
  }
  // 根节点所在的位置 是行0 列中间位置
  dfs(root, 0, w >> 1)
  return res
}

//找到最大深度
//画出棋盘
//找到ij
//left:
//right:
//根据公式写ij的value

var printTree = function (root) {
  function getMaxHeight(root) {
    if (!root) return 0
    let left = getMaxHeight(root.left)
    let right = getMaxHeight(root.right)
    return Math.max(left, right) + 1
  }
  let height = getMaxHeight(root)
  let width = Math.pow(2, height) - 1

  let canvas = new Array(height).fill("").map((x) => new Array(width).fill(""))

  function drawTree(root, i, j) {
    let val = root.val
    canvas[i][j] = val
    let left = root.left
    let right = root.right
    let height = h - 1
    let nextRow = i + 1
    let diffCol = Math.pow(2, height - nextRow)
    drawTree(left, nextRow, j - diffCol)
    drawTree(right, nextRow, j - diffCol)
  }
}
