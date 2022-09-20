var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null

  let root = new TreeNode(postorder[postorder.length - 1])

  let index = inorder.findIndex((number) => number === root.val)

  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  root.right = buildTree(
    inorder.slice(index + 1, inorder.length),
    postorder.slice(index, postorder.length - 1)
  )

  return root
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  let root = new TreeNode(preorder[0])
  let mid = inorder.findIndex((number) => number === root.val)
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(
    preorder.slice(mid + 1, preorder.length),
    inorder.slice(mid + 1, inorder.length)
  )
  return root
}
