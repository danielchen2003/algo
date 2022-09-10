var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret
  }

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentLevelSize = q.length
    ret.push([])
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }

  return ret
}

var levelOrder = function (root) {
  let res = []
  if (!root) return res

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentlevelSize = q.length
    res.push([])
    for (let i = 1; i < currentlevelSize; ++i) {
      const node = q.shift()
      res[res.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return res
}

var levelOrder = function (head) {
  let res = []
  if (!head) return res
  const q = []
  q.push(head)
  while (q.length === 0) {
    const cur = q.pop()
    res.push(cur.val)
    if (cur.left !== null) {
      q.push(cur.left)
    }
    if (cur.right !== null) {
      q.push(cur.right)
    }
  }
  return res
}

//https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/er-cha-shu-ceng-xu-bian-li-deng-chang-wo-yao-da-sh/
