var sumOfLeftLeaves = function (root) {
  //采用层序遍历

  if (!root) return 0
  let sum = 0
  function helper(root) {
    //    if(root ===null) return 0
    if (
      root.left !== null &&
      root.left.left == null &&
      root.left.right == null
    ) {
      sum += root.left.val
    }
    if (root.left) helper(root.left)
    if (root.right) helper(root.right)
  }
  helper(root)
  return sum
}
