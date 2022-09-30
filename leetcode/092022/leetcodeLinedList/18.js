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
      console.log(tmp)
      dfs(i + 1, count - 1, target - nums[i])
      tmp.pop()
    }
  }
}
let nums = [1, 0, -1, 0, -2, 2],
  target = 0
console.log(fourSum(nums, target))

// var fourSum = function (nums, target) {
//   let list = []
//   let len = nums.length
//   let tmp = []

//   nums.sort((a, b) => a - b)

//   dfs(0, 4, target)
//   return list

//   function dfs(index, count, target) {
//     if (count === 0 && target === 0) {
//       list.push([...tmp])
//       return
//     }
//     //身下数字已经不够了比如我有3count 剩下2个数字3个数 就剪掉
//     if (len - index < count) {
//       return
//     }
//     if (target < count * nums[index]) return
//     if (target > count * nums[len - 1]) return
//     //起重复
//     for (let i = index; i < len; i++) {
//       if (i > index && nums[i] === nums[i - 1]) {
//         continue
//       }
//       tmp.push(nums[i])
//       dfs(i + 1, count - 1, target - nums[i])
//       tmp.pop()
//     }
//   }
// }
