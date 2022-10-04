const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1)
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(result, dp[i])
  }

  return result
}

const lengthOfLIS = (nums) => {
  let dp = new Array(nums.length).fill(1)
  let res = 1
  for (let i = 1; i < nums.length; i++) {
    //这里j<i 的意思是i以前有多少个j 是小于nums[i]的
    //另外一个变种是nums[i] 和i+1
    // nums[i]  nums [j]  j= i+1 - length从1 到最后
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i])
    }
    res = Math.max(res, dp[i])
  }
  return res
}

const lengthOfLIS = (nums) => {
  let dp = new Array(nums.length).fill(1)
  let res = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      //dp[i] 是到目前数为止有多少个数比他本身大
      if (dp[nums[j]] < dp[nums[i]]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}
