var preorderTraversal = function (root, res = []) {
  if (!root) return res
  res.push(root.val)
  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)
  return res
}

var preorderTraversal = function (root) {
  const res = []
  const helper = (root) => {
    if (!root) return res
    res.push(root.val)

    helper(root.left)
    helper(root.right)
  }
  helper(root)
  return res
}

//中序遍历:
var inorderTraversal = function (root, res = []) {
  if (!root) return res
  inorderTraversal(root.left, res)
  res.push(root.val)
  inorderTraversal(root.right, res)
  return res
}

//后序遍历:
var postorderTraversal = function (root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}

// 时间复杂度O(n),n为节点个树，空间复杂度O(n)，显示栈的空间开销

// 前序遍历：中左右
// 压栈顺序：右左中
var preorderTraversal = function (root, res = []) {
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) stack.push(node.right) // 右
    if (node.left) stack.push(node.left) // 左
    stack.push(node) // 中
    stack.push(null)
  }
  return res
}

//  中序遍历：左中右
//  压栈顺序：右中左
var inorderTraversal = function (root, res = []) {
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
    }
  }
}

var preorderTraversal = function (root) {
  let res = []
  if (!root) {
    return res
  }
  let stack = [root]
  let cur
  while (stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
  return res
}

var preorderTraversal = function (root) {
  let arr = []
  pre(root, arr)
  return arr
}

var pre = function (root, arr) {
  if (root == null) {
    return
  }
  arr.push(root.val)
  pre(root.left, arr)
  pre(root.right, arr)
  return arr
}
