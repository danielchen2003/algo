// const rob = (root) => {
//   // 后序遍历函数
//   const postOrder = (node) => {
//     // 递归出口
//     if (!node) return [0, 0]
//     // 遍历左子树
//     const left = postOrder(node.left)
//     // 遍历右子树
//     const right = postOrder(node.right)
//     // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
//     const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
//     // 偷当前节点，左右子节点只能不偷
//     const Do = node.val + left[0] + right[0]
//     // [不偷，偷]
//     return [DoNot, Do]
//   }
//   const res = postOrder(root)
//   // 返回最大值
//   return Math.max(...res)
// }

// int rob(TreeNode* root) {
//   if (root == NULL) return 0;
//   if (root->left == NULL && root->right == NULL) return root->val;
//   // 偷父节点
//   int val1 = root->val;
//   if (root->left) val1 += rob(root->left->left) + rob(root->left->right); // 跳过root->left，相当于不考虑左孩子了
//   if (root->right) val1 += rob(root->right->left) + rob(root->right->right); // 跳过root->right，相当于不考虑右孩子了
//   // 不偷父节点
//   int val2 = rob(root->left) + rob(root->right); // 考虑root的左右孩子
//   return max(val1, val2);
// }

// class Solution {
//   public:
//       unordered_map<TreeNode* , int> umap; // 记录计算过的结果
//       int rob(TreeNode* root) {
//           if (root == NULL) return 0;
//           if (root->left == NULL && root->right == NULL) return root->val;
//           if (umap[root]) return umap[root]; // 如果umap里已经有记录则直接返回
//           // 偷父节点
//           int val1 = root->val;
//           if (root->left) val1 += rob(root->left->left) + rob(root->left->right); // 跳过root->left
//           if (root->right) val1 += rob(root->right->left) + rob(root->right->right); // 跳过root->right
//           // 不偷父节点
//           int val2 = rob(root->left) + rob(root->right); // 考虑root的左右孩子
//           umap[root] = max(val1, val2); // umap记录一下结果
//           return max(val1, val2);
//       }
//   };

// const rob = (root) => {
//   if(!root)return 0
//   let map = {}
//   const helper = (root) => {
//     if (!root) return 0
//     if (!root.left && !root.right) {
//       return root.val
//     }
//     if (map[root]!=undefined)return  map[root]
//     let res1 = root.val
//     // 偷当前节点和左右孙子
//     // root.left && (res1 += helper(root.left.left) + helper(root.left.right))
//     root.right && (res1 += helper(root.right.left) +helper (root.right.right))
//     let res2 = helper(root.left) + helper(root.right)
//     map[root] = Math.max(res1,res2)
//     return Math.max(res1, res2)
//   }
//   return rob(root)

// }

const rob = (root) => {
  // 后序遍历函数
  const postOrder = (node) => {
    // 递归出口
    if (!node) return [0, 0]
    // 遍历左子树
    const left = postOrder(node.left)
    // 遍历右子树
    const right = postOrder(node.right)
    // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 偷当前节点，左右子节点只能不偷
    const Do = node.val + left[0] + right[0]
    // [不偷，偷]
    return [DoNot, Do]
  }
  const res = postOrder(root)
  // 返回最大值
  return Math.max(...res)
}
var rob = (root) => {
  const postOrder = (node) => {
    if (!node) return [0, 0]
    let left = postOrder(node.left)
    let right = postOrder(node.right)
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const Do = node.val + left[0] + right[0]
    return [DoNot, Do]
  }
  let res = postOrder(root)
  return Math.max(...res)
}

const memory = {}
function rob(root) {
  if (root === null) return 0
  if (memory[root]) return memory[root]
  // 不取当前节点
  const res1 = rob(root.left) + rob(root.right)
  // 取当前节点
  let res2 = root.val
  if (root.left !== null) res2 += rob(root.left.left) + rob(root.left.right)
  if (root.right !== null) res2 += rob(root.right.left) + rob(root.right.right)
  const res = Math.max(res1, res2)
  memory[root] = res
  return res
}

   [70]   决定偷3  [70,55 100 5 8]
 [1 ,5]  //不能偷
[55,5, 5 8]本来要偷 发现下面好多钱
[5,100,1,1 ]于是我们放弃上面一排 我们需偷左变55 右边的100 和 5 ， 8

