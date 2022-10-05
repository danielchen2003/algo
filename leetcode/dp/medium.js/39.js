var combinationSum = function(candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
      if (idx === candidates.length) {
          return;
      }
      if (target === 0) {
          ans.push(combine);
          return;
      }
      // 直接跳过
      dfs(target, combine, idx + 1);
      // 选择当前数
      if (target - candidates[idx] >= 0) {
          dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
      }
  }

  dfs(target, [], 0);
  return ans;
};

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/combination-sum/solution/zu-he-zong-he-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。