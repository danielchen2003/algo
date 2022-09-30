// 递归法：
var isBalanced = function (root) {
  //还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
  // 1. 确定递归函数参数以及返回值
  const getDepth = function (node) {
    // 2. 确定递归函数终止条件
    if (node === null) return 0
    // 3. 确定单层递归逻辑
    let leftDepth = getDepth(node.left) //左子树高度
    // 当判定左子树不为平衡二叉树时,即可直接返回-1
    if (leftDepth === -1) return -1
    let rightDepth = getDepth(node.right) //右子树高度
    // 当判定右子树不为平衡二叉树时,即可直接返回-1
    if (rightDepth === -1) return -1
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    } else {
      return 1 + Math.max(leftDepth, rightDepth)
    }
  }
  return !(getDepth(root) === -1)
}

var isBalanced = function (root) {
  const res = {
    isBalancedTree: true,
  }
  dfs(root, res)
  return res.isBalancedTree
}

/**
 * 求树的深度
 */
var maxDepth = function (root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/**
 * 深度遍历
 */
var dfs = function (root, res) {
  if (root == null) return
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
    return (res.isBalancedTree = false)
  }
  dfs(root.left, res)
  dfs(root.right, res)
}

var isBalanced = function (root) {
  let tree = {
    isBalanced: true,
  }
  dfs(root, tree)
  return tree.isBalanced
}

var dfs = function (root, res) {
  if (root === null) return
  leftMax = maxDepth(root.left)
  rightMax = maxDepth(root.right)
  if (Math.abs(leftMax - rightMax) > 1) {
    return (res.isBalancedTree = false)
  }
  dfs(root.left, res)
  dfs(root.right, res)
}
function maxDepth(root) {
  if (!root) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

let res = {
  isBalancedTree: true,
}

res.isBalancedTree = false

console.log(res.isBalancedTree)


bool isBalanced(TreeNode*&root)
{
    if (!root)
        return true;
    return abs((height(root->left) - height(root->right)) <= 1) && isBalanced(root->left) && isBalanced(root->right);
}

