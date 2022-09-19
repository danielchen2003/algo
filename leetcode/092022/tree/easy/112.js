var hasPathSum = function(root, targetSum) {
  if(!root) return root.val===targetSum ? true :false

  let sum = root.val
  const helper = (root,sum){
      if(!root) return 0
      let pathLeft = helper(root.left)
      let pathLeft =  helper(root.right)
  }

};