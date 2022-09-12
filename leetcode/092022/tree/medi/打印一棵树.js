const getSuccessorNode = (node) => {
  if ((node = null)) return null
  if (node.right !== null) {
    return getLeftMost(node.right)
  } else {
    //无柚子树
    const parent = node.parent
    while (parent !== null && parent.right == node) {
      //当前节点是父亲节点右节点
      node.parent
      parent = node.parent
    }
    return parent
  }
}

function getLeftMost(node) {
  if (node == null) {
    return node
  }
  while (node.left != null) {
    node = node.left
  }
  return node
}
