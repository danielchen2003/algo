let hasPathSum = function (root, targetSum) {
  if (root === null) return false
  let nodeArr = [root]
  let valArr = [0]
  while (nodeArr.length) {
    let curNode = nodeArr.shift()
    let curVal = valArr.shift()
    curVal += curNode.val
    // 为叶子结点，且和等于目标数，返回true
    if (
      curNode.left === null &&
      curNode.right === null &&
      curVal === targetSum
    ) {
      return true
    }
    // 左节点，将当前的数值也对应记录下来
    if (curNode.left) {
      nodeArr.push(curNode.left)
      valArr.push(curVal)
    }
    // 右节点，将当前的数值也对应记录下来
    if (curNode.right) {
      nodeArr.push(curNode.right)
      valArr.push(curVal)
    }
  }
  return false
}

let hasPathSum = function (root, targetSum) {
  if (!root) return false
  let q = [root]
  let valArr = [root.val]
  let sum = 0
  while (q.length !== 0) {
    let node = q.shift()
    let curSum = valArr.shift()
    curSum += node.val
    if (curSum === targetSum && node.left === null && node.right === null) {
      return true
    }
    node.left && q.push(node.left)
    node.left && valArr.push(curSum)
    node.right && q.push(node.right)
    node.right && valArr.push(curSum)
  }
  return false
}
