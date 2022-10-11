var deleteNode = function (root, key) {
  if (root.val > key.val) {
    return (root.left = deleteNode(root.left, key))
  } else if (root.val < key.val) {
    return (root.right = deleteNode(root.right, key))
  } else {
    //如果左右都没有返回null
    if (!root.left && !root.right) {
      return null
    }

    //如有左
    if (!root.left) {
      return root.right
    }
    //如有右
    if (!root.right) {
      return root.left
    }
    //右左都有
    else {
      let next = findNext(root)
      next.left = next
      root.val = next.val
      root.right = deleteNode(root.right, next.val)
      return root
    }
  }

  //返回
}

function findNext(root) {
  if (!root) return root
  let next = root.right
  while (next.left) {
    next = next.left
  }
  return next
}
