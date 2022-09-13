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

let isBalanced = function (root) {
  const res = {
    isBalanced: true,
  }
  dfs(root, res)
  return res.isBalancedTree
}

let maxDepth = function (root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

let dfs = function (root, res) {
  if (root == null) return
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
    return (res.isBalancedTree = false)
  }
  dfs(root.left, res)
  dfs(root.right, res)
}

var isBalanced = function (root) {
  let res = {
    balnced: true,
  }
  dfs(root, res)
  return res.balnced
}

let maxDepth = (node) => {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

function dfs(root, res) {
  if (root === null) return
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right) > 1))
    return (res.balnced = false)

  dfs(root.left, res)
  dfs(root.right, res)
}
\\

*/
class Solution {
    boolean isBalanced = true;
    public boolean isBalanced(TreeNode root) {
        // 递归过程识别是否是平衡树并标记全局变量中
        dfs(root);
        return isBalanced ;
    }
    private int  dfs(TreeNode node){
        //递归的出口
        if(node == null) return 0;
        //已经识别为非平衡二叉树，则剪枝
        //剪简直很精髓
        if(!isBalanced) return 0;
        //递归求左右子树的深度
        int leftH = dfs(node.left)+1;
        int rightH = dfs(node.right)+1;
        if(Math.abs(leftH-rightH) > 1){
            isBalanced = false;
        }
        //返回左右子树的最大深度
        return Math.max(leftH,rightH);
    }
}


// 全局变量，记录子问题 发现为非平衡，则符合剪枝条件
// boolean isBalanced = true;
// private int dfs(TreeNode node) {
//     (1) 出口条件，如 node == null；
//     (2) 非平衡则剪枝 isBalanced = false;
//     (3) 分解为子问题, 即获取左右子树深度
//     (4) 判断是否找到结果，左右子树深度差大于1
//     (5) 返回当前子问题结果，取Max（左子树，右子树）
// }



var isBalanced = function(root) {
  let isBalancedTree = true
  
  const dfs=(root)=>{
      if(root===null) return 
      if(isBalancedTree===false) return
      let leftTreeDepth = dfs(root.left)+1
      let rightTreeDepth = dfs(root.right)+1
      if(Math.abs(leftTreeDepth-rightTreeDepth)>1){
          isBalancedTree=false
          
      }
      return Math.max(rightTreeDepth,leftTreeDepth )
  }
  
  dfs(root)
  return isBalancedTree 
};



var isBalanced = function(root) {
  let isBalancedTree = true
  
  const dfs=(root)=>{
      if(root===null) return 0
      if(isBalancedTree===false) return 0
      let leftTreeDepth = dfs(root.left)+1
      let rightTreeDepth = dfs(root.right)+1
      if(Math.abs(leftTreeDepth-rightTreeDepth)>1){
          isBalancedTree=false
       
      }
      return Math.max(leftTreeDepth,rightTreeDepth)
  }
  
  dfs(root)
  return isBalancedTree 
};