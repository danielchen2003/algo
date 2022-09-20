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

var searchBST = function (root, val) {
  let res = null
  function helper(root) {
    if (!root) return null
    if (root.val === val) return root
    if (root.val > val) helper(root.left)
    else helper(root.right)
  }
  helper(root)
  return res
}
