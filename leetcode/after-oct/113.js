let pathSum = function (root, targetSum) {
  if (root === null) return []
  let nodeArr = [root]
  let resArr = [] // 记录符合目标和的返回路径
  let tempArr = [[]] // 对应路径
  let countArr = [0] //对应和
  while (nodeArr.length) {
    let curNode = nodeArr.shift()
    let curVal = countArr.shift()
    let curNodeArr = tempArr.shift()
    curVal += curNode.val
    curNodeArr.push(curNode.val)
    // 为叶子结点，且和等于目标数，将此次结果数组push进返回数组中
    if (
      curNode.left === null &&
      curNode.right === null &&
      curVal === targetSum
    ) {
      resArr.push(curNodeArr)
    }
    // 左节点，将当前的和及对应路径也对应记录下来
    if (curNode.left) {
      nodeArr.push(curNode.left)
      countArr.push(curVal)
      tempArr.push([...curNodeArr])
    }
    // 右节点，将当前的和及对应路径也对应记录下来
    if (curNode.right) {
      nodeArr.push(curNode.right)
      countArr.push(curVal)
      tempArr.push([...curNodeArr])
    }
  }
  return resArr
}
