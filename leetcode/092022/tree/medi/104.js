function maxDepth(root) {
  let resMax = 0
  let count = 0
  function recur(node, count) {
    if (node === null) {
      resMax = Math.max(resMax, count)
      return
    }
    recur(node.left, count + 1)
    recur(node.right, count + 1)
  }

  recur(root, count)
  return resMax144444123555342124545325324
}
