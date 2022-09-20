var isSymmetric = function (root) {
  function helper(left, right) {
    let q = [left, right]
    while (q.length > 0) {
      let size = q.length
      for (let i = 0; i < size; i++) {
        let left = q.shift().left
        let right = q.shift().right
        if (left === null && right === null) {
          continue
        }
        if (left === null || (right === null && right.val !== left.val)) {
          return false
        } else {
          //都不为空
          q.push(left.left)
          q.push(right.right)
          q.push(left.right)
          q.push(right.left)
        }
      }
    }
    return true
  }
  return helper(root, root)
}

var isSymmetric = function (root) {
  //遍历左右子树
  //1.确定递归的参数 root.lelt root.right return 是boolean
  if (root === null) return true
  let compareNode = function (left, right) {
    if (left === null && right !== null) {
      return false
    }
    if (right === null && left !== null) {
      return false
    }
    if (left === null && right === null) return true
    if (left !== null && right !== null && left.val !== right.val) {
      return false
    }
    return (
      compareNode(left.left, right.right) && compareNode(left.right, right.left)
    )
  }
  return compareNode(root, root)
}
