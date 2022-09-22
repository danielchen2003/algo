var goodNodes = function(root) {
  if(root == null) return 0;
  let res = 0;
  const dfs = (root, max)=>{
    // 递归结束条件
    if(root == null) return;
    // 锁定当前路径内的最大值
    let curMax = max;
    // 将当前节点的值与当前路径的最大值进行比较，就可以判定是否符合条件
    if (root.val >= max) {
        res++;
        curMax = root.val;
    }
    dfs(root.left, curMax);
    dfs(root.right, curMax);
  }
  // 从根节点开始递归
  dfs(root, root.val);
  return res;
};

作者：leojiang-r
链接：https://leetcode.cn/problems/count-good-nodes-in-binary-tree/solution/by-leojiang-r-ndkl/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。