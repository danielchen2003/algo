var mergeTrees = function (root1, root2) {
  if (!root1) return root2
  if (!root2) return root1

  root1.val += root2.val
  root1.next = mergeTrees(root1.next, root2)
  root2.next = mergeTrees(root1, root2.next)
  return root1 ? root1 : root2
}
