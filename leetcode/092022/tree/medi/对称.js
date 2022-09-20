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
