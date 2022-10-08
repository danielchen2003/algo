var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root
  if (root.val > p.val && root.val > q.val)
    lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val)
    lowestCommonAncestor(root.right, p, q)
  else {
    return root
  }
}
