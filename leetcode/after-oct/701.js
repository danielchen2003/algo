var insertIntoBST = function (root, val) {
  if (!root) {
    let newNode = new TreeNode(val, null)
    return newNode
  }
  if (val < root.val) {
    return (root.left = insertIntoBST(newNode, val))
  } else {
    return (root.right = insertIntoBST(newNode, val))
  }
  return root
}

//找到叶子节点
//新建节点
//返回节点到root
var insertIntoBST = function (root, val) {
  if (!node) {
    let node = new TreeNode(val, null)
    return node
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }
  return root
}
//   left
//   |
// node 返回上一层 root.left =  new node

var insertIntoBST = function (root, val) {
  let parent = new TreeNode(0)
  const preOrder = (cur, val) => {
    if (cur === null) {
      let node = new TreeNode(val)
      if (parent.val > val) parent.left = node
      else parent.right = node
      return
    }
    parent = cur
    if (cur.val > val) preOrder(cur.left, val)
    if (cur.val < val) preOrder(cur.right, val)
  }
  if (root === null) root = new TreeNode(val)
  preOrder(root, val)
  return root
}

var insertIntoBST = function (root, val) {
  let pre = new TreeNode(0)
  const preorder = (root, val) => {
    if (root == null) {
      let node = new TreeNode(val)
      if (val < pre.val) {
        pre.left = node
      } else {
        pre.right = node
      }
      return
    }
    pre = root
    if (val < root.val) preorder(root.left, val)
    else preorder(root.right, val)
    return
  }
  if (root === null) root = new TreeNode(val)
  preorder(root, val)
  return root
}

var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val)
  } else {
    let parent = new TreeNode(0)
    let cur = root
    while (cur) {
      parent = cur
      if (cur.val > val) cur = cur.left
      else cur = cur.right
    }
    let node = new TreeNode(val)
    if (parent.val > val) parent.left = node
    else parent.right = node
  }
  return root
}

var insertIntoBST = function (root, val) {
  let pre = new Node(-1)
  let node = root
  let newNode = new Node(val)
  if (root === null) return (root = newNode)
  while (node !== null) {
    if (val < root.val) {
      pre = node
      node = node.left
    } else {
      pre = node
      node = node.right
    }
  }
  if (val < pre.val) {
    pre.left = newNode
  } else {
    pre.right = newNode
  }
  return root
}
