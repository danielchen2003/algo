var searchBST = function (root, val) {
  let ans = null

  function recursion(node) {
    if (ans) return
    if (node === null) return

    if (node.val === val) ans = node
    if (node.val < val) recursion(node.right)
    if (node.val > val) recursion(node.left)
  }

  recursion(root)

  return ans
}

var searchBST = function (root, val) {
  if (!root) {
    return null
  }
  if (val === root.val) {
    return root
  }
  return searchBST(val < root.val ? root.left : root.right, val)
}
