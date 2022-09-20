let hasPathSum = function (root, targetsum) {
  // 递归法
  const traversal = (node, cnt) => {
    // 遇到叶子节点，并且计数为0
    if (cnt === 0 && !node.left && !node.right) return true
    // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    if (!node.left && !node.right) return false

    //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    if (node.left && traversal(node.left, cnt - node.left.val)) return true
    //  右（空节点不遍历）
    if (node.right && traversal(node.right, cnt - node.right.val)) return true
    return false
  }
  if (!root) return false
  return traversal(root, targetsum - root.val)
}
