var levelOrder = function (root) {
  //每一层可能有2个以上,所以不再使用node.left node.right
  let res = [],
    queue = []
  queue.push(root)
  while (queue.length && root !== null) {
    //记录每一层节点个数还是和二叉树一致
    let length = queue.length
    //存放每层节点 也和二叉树一致
    let curLevel = []
    while (length--) {
      let node = queue.shift()
      curLevel.push(node.val)
      //这里不再是 ndoe.left node.right 而是循坏node.children
      for (let item of node.children) {
        item && queue.push(item)
      }
    }
    res.push(curLevel)
  }
  return res
}

var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let q = []
  q.push(root)
  while (q.length !== 0) {
    let curSize = q.length
    let curLevel = []
    for (let i = 0; i < curSize; i++) {
      let cur = queue.shift()
      curLevel.push(cur.val)
      for (let childNode of node.children) {
        childNode && q.push(childNode)
      }
    }
    res.push(curLevel)
  }
  return res
}
