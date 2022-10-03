var lowestCommonAncestor = function (root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const travelTree = function (root, p, q) {
    // 2. 确定递归终止条件
    if (root === null || root === p || root === q) {
      return root
    }
    let left = travelTree(root.left, p, q)
    let right = travelTree(root.right, p, q)
    //已经到底了 返回root
    //返回的stack中 我们要判断了， 如果root 是空的情况，是target的情况
    if (left !== null && right !== null) return root
    //我们要判断左边收集来的情报， 和右边手机来的情报
    if (left == null) {
      return right
    } else if (right == null) {
      return left
    } else {
      return null
    }
  }
  return travelTree(root, p, q)
}
  start          9               end 
[(4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2)]
