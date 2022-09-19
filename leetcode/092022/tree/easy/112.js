var hasPathSum = function (root, targetSum) {
  if (!root) return root.val === targetSum ? true : false

  let sum = root.val
  const helper = (root, sum) => {
    if (!root) return 0
    let pathLeft = helper(root.left, sum)
    let pathRight = helper(root.right, sum)

    return
  }
}

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if(!root.left && !root.right) return root.val === targetSum
  
  return (
    hasPathSum(root, targetSum - root.val) ||
    hasPathSum(root, targetSum - root.val)
  )
}


public boolean hasPathSum(TreeNode root, int sum) {
  if(root==null)
      return false;
  if(root.left==null&&root.right==null)
  {
      return sum-root.val==0;
  } 
  return hasPathSum(root.left,sum-root.val)||hasPathSum(root.right,sum-root.val);
}

public class Solution {
  public boolean hasPathSum(TreeNode root, int sum) {
      if(root == null){
          return false;
      }
      if(root.left == null && root.right == null){
          return root.val == sum;
      }
      return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
      
  }
}



