var maxPathSum = function (root) {
  let max = -Infinity
  function helper(root) {
    if (!root) return 0

    let left = helper(root.left)
    let right = helper(root.right)

    let rootPath = root.val + Math.max(left.val, 0) + Math.max(right.val, 0)
    let nodePath =
      root.val + Math.max(0, Math.max(left.val, 0) + Math.max(right.val, 0))

    max = Math.max(max, rootPath, nodePath)

    return res
  }
  helper(root)
  return max
}
