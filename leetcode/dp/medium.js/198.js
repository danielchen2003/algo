var robTo = function (nums, lastIndex) {
  if (lastIndex < 0) return 0
  if (lastIndex === 0) {
    return nums[0]
  }

  // 方案一，包含最后一栋房子，则应该丢弃倒数第二栋房子
  let sum1 = robTo(nums, lastIndex - 2) + nums[lastIndex]

  // 方案二，不包含最后一栋房子，那么方案二的结果就是到偷到 lastIndex-1 为止的最优结果
  let sum2 = robTo(nums, lastIndex - 1)

  return Math.max(sum1, sum2)
}

var rob = function (nums) {
  return robTo(nums, nums.length - 1)
}


if (nums == NULL || numsSize <= 0) {
  return 0;
}

if (numsSize == 1) {
  return nums[0];
}

if (numsSize == 2) {
  return max(nums[0], nums[1]);
}

// int dp[numsSize + 1];
// memset(dp, 0, numsSize + 1);

// dp[0] = -1;
// dp[1] = nums[0];//抢
// dp[2] = max(nums[0], nums[1]);//哪家多抢哪里
// for (int i = 3; i <= numsSize; ++i) {
//   int roomIndex = i - 1;
//   int oneChoice = dp[i - 1]; // 选择不抢
//   int anotherChoice = dp[i - 2] + nums[roomIndex]; // 选择抢，但是不能连续,
//   printf("%d,%d\r\n", oneChoice, anotherChoice);
//   dp[i] = max(oneChoice, anotherChoice);
// }
// int result = dp[numsSize];
// return result;


var rob = function(nums) {
  if (nums.length === 0) {
      return 0;
  }
  if (nums.length === 1) {
      return nums[0];
  }

  // 仍然用两个变量来存储方案一和方案二的最优结果
  // 不同的是，这次从0开始，lastIndex 取最小值 1
  let sum1 = nums[0];
  let sum2 = nums[1];

  // 然后通过迭代不断增大 lastIndex，过程中维护新的sum1，sum2，直到数组末尾
  for (let lastIndex=2; lastIndex<nums.length; lastIndex++) {
      let tmp = sum1;

      // 此时的方案一就是上一步中的方案二，
      // 但要求的是最优解，所以要判断前一步的 sum1 和 sum2 哪个更大
      if (sum2 > sum1) {
          sum1 = sum2;
      }

      // sum2 是包含最后一栋房子的方案， 
      // 每向后增加一栋房子，就是前一步的 sum1（不包含 lastIndex - 1 ） 
      // 加上当前 lastIndex 栋房子的金钱
      sum2 = tmp + nums[lastIndex]; 
  }

  return sum1 > sum2 ? sum1 : sum2;
};


作者：liushouxiang
链接：https://leetcode.cn/problems/house-robber/solution/dong-tai-gui-hua-jie-ti-si-lu-javascript-by-liusho/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。