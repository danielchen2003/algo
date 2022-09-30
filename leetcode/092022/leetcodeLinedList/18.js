var fourSum = function (nums, target) {
  let list = []
  let len = nums.length
  let tmp = []

  nums.sort((a, b) => a - b)
  // 参数：数组索引从 0 开始，4 个数字，目标
  dfs(0, 4, target)
  return list

  function dfs(index, count, target) {
    // 终止条件
    if (count === 0 && target === 0) {
      list.push([...tmp])
      return
    }
    // 剪枝：剩下可选的数字 < 需要的数字个数
    if (len - index < count) {
      return
    }
    // 剪枝：count 个最小值都大于 target
    if (target < count * nums[index]) {
      return
    }
    // 剪枝：count 个最大值都小于 target
    if (target > count * nums[len - 1]) {
      return
    }

    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      tmp.push(nums[i])
      dfs(i + 1, count - 1, target - nums[i])
      tmp.pop()
    }
  }
};


作者：1105389168
链接：https://leetcode.cn/problems/4sum/solution/si-shu-zhi-he-by-1105389168-y7b9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。