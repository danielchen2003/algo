var minDepth = function (root) {
  if (!root) return 0
  let q = []
  q.push(root)
  let depth = 0
  while (q.length !== 0) {
    let len = q.length
    depth += 1
    for (let i = 0; i < len; i++) {
      let node = q.shift()

      node.left && q.push(node.left)
      node.right && q.push(node.right)
      if (!node.left && !node.right) {
        return depth
      }
    }
  }
  return depth
}
