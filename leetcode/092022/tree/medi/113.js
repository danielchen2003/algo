let pathSum = function (root, targetsum) {
  // 递归法
  // 要遍历整个树找到所有路径，所以递归函数不需要返回值, 与112不同
  const res = []
  const travelsal = (node, cnt, path) => {
    // 遇到了叶子节点且找到了和为sum的路径
    if (cnt === 0 && !node.left && !node.right) {
      res.push([...path]) // 不能写res.push(path), 要深拷贝
      return
    }
    if (!node.left && !node.right) return // 遇到叶子节点而没有找到合适的边，直接返回
    // 左 （空节点不遍历）
    if (node.left) {
      path.push(node.left.val)
      cnt = cnt - node.left.val
      travelsal(node.left, cnt, path) // 递归
      cnt = cnt + node.left.val
      path.pop() // 回溯
    }
    // 右 （空节点不遍历）
    if (node.right) {
      path.push(node.right.val)
      cnt = cnt - node.right.val
      travelsal(node.right, cnt, path) // 递归
      cnt = cnt - node.right.val
      path.pop() // 回溯
    }
    return
  }
  if (!root) return res
  travelsal(root, targetsum - root.val, [root.val]) // 把根节点放进路径
  return res
}

let pathSum = function (root, targetsum) {
  let res = []
  const travelsal = function (node, cnt, path) {
    //到底返回了，但是没结束可能有另外路径
    if ((cnt = 0 && !node.left && !node.right)) {
      res.push([...path])
      return
    }
    if (node.left) {
      path = [...pathSum, node.left.val]
      travelsal(node.left, targetsum - root.val, path)
    }
    if (node.right) {
      path = [...pathSum, right.val]
      travelsal(node.right, targetsum - root.val, path)
    }
  }
  travelsal(root, targetsum - root.val, [root.val])
  return res
}
