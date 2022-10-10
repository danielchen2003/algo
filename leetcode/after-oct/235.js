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

var lowestCommonAncestor = function (root, p, q) {
  if (!root || (root.val - p.val) * (root.val - q.val) < 0) {
    return root
  }
  if (root.val > p.val && root.val > q.val) {
    lowestCommonAncestor(root.left, p, q)
  } else {
    lowestCommonAncestor(root.right, p, q)
  }
}
