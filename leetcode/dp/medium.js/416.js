// func canPartition(nums []int) bool {
//   // 核心逻辑前的一些处理以及初始化工作
//   lenn, target := len(nums), 0
//   for _, n := range nums {target += n}
//   // 数组总和无法对半分，那就直接 false
//   if target % 2 != 0 {return false}
//   target /= 2
//   // 数组中最大元素比总和的一半还大，直接 false
//   if max(nums) > target {return false}
//   // 定义 dp 数组，长度为 lenn + 1, dp[i][j] 的含义为前 i 个元素中任选和为 j 的可能性
//   dp := make([][]bool, lenn+1)
//   // 第二维只需总和的一半即可
//   for i := range dp {dp[i] = make([]bool, target+1)}
//   // 去除干扰元素，即 dp[0][j] （j != 0） 赋值为 false，因为前 0 个元素中任选和为 j 的可能性为 0，即为 false
//   for j := range dp[0] {dp[0][j] = false}
//   dp[0][0] = true
//   // 核心逻辑
//   for i := 1; i <= lenn; i++ {
//       for j := 0; j <= target; j++ {
//           n := nums[i-1]
//           if n > j { // 当前要考虑的元素比 j 还大，那直接跳过当前元素
//               dp[i][j] = dp[i-1][j]
//           } else {
//               dp[i][j] = dp[i-1][j] || dp[i-1][j-n]
//           }
//       }
//   }
//   return dp[lenn][target]
// }

// func canPartition(nums []int) bool {
//   // 核心逻辑前的一些处理以及初始化工作
//   target := 0
//   for _, n := range nums {target += n}
//   // 数组总和无法对半分，那就直接 false
//   if target % 2 != 0 {return false}
//   target /= 2
//   // 数组中最大元素比总和的一半还大，直接 false
//   if max(nums) > target {return false}
//   // 定义 dp 数组，长度为 lenn + 1, dp[i][j] 的含义为前 i 个元素中任选和为 j 的可能性
//   dp := make([]bool, target+1)
//   dp[0] = true
//   for _, n := range nums {
//       // 注意！注意！注意！此处的遍历顺序很重要，必须从大到小的遍历
//       // 因为我们状态压缩之后，想要复用上一行的旧值，而如果我们由小到大的遍历
//       // dp[j-n] 会先于 dp[j] 更新，于是就覆盖了旧值，导致错误
//       for j := target; j >= n; j-- {
//           dp[j] = dp[j] || dp[j-n]
//       }
//   }
//   return dp[target]
// }

// class Solution:
//     def canPartition(self, nums: List[int]) -> bool:

//         total = sum(nums)
//         if total % 2 == 1:      # 总和无法等分
//             return False

//         target = total // 2
//         if max(nums) > target:  # 最大值大于总和的一半，无法分割
//             return False

//         '''【0/1背包】：从nums中选出的数字刚好能组成target'''
//         n = len(nums)

//         # 初始化
//         dp = [[False] * (target+1) for _ in range(n+1)]
//         # dp[i][j]: 从前i个元素中选出若干个数字刚好能够组成j
//         dp[0][0] = True     # 其他 dp[0][j]均为False

//         # 状态更新
//         for i in range(1, n+1):
//             for j in range(target+1):
//                 if j < nums[i-1]:   # 容量有限，无法选择第i个数字nums[i-1]
//                     dp[i][j] = dp[i-1][j]
//                 else:               # 可选择第i个数字nums[i-1]，也可不选
//                     dp[i][j] = dp[i-1][j] | dp[i-1][j-nums[i-1]]

//         return dp[n][target]

//         var canPartition = function(nums) {
//           const n = nums.length;
//           if (n < 2) {
//               return false;
//           }
//           let sum = 0, maxNum = 0;
//           for (const num of nums) {
//               sum += num;
//               maxNum = maxNum > num ? maxNum : num;
//           }
//           if (sum & 1) {
//               return false;
//           }
//           const target = Math.floor(sum / 2);
//           if (maxNum > target) {
//               return false;
//           }
//           const dp = new Array(n).fill(0).map(() => new Array(target + 1, false));
//           for (let i = 0; i < n; i++) {
//               dp[i][0] = true;
//           }
//           dp[0][nums[0]] = true;
//           for (let i = 1; i < n; i++) {
//               const num = nums[i];
//               for (let j = 1; j <= target; j++) {
//                   if (j >= num) {
//                       dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
//                   } else {
//                       dp[i][j] = dp[i - 1][j];
//                   }
//               }
//           }
//           return dp[n - 1][target];
//       };

var canPartition = function (nums) {
  const sum = nums.reduce((p, v) => p + v)
  if (sum & 1) return false
  let dp = Array(length).fill(t)
  // const dp = Array(sum / 2 + 1).fill(t)

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      console.log(dp)
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[j] === sum / 2) {
        return true
      }
    }
  }

  return dp[sum / 2] === sum / 2
}

let nums = [1, 5, 11, 5]

console.log(canPartition(nums))
