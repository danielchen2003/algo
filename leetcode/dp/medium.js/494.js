// var findTargetSumWays = function (nums, target) {
//   let res = 0
//   function dfs(nums, start, target, curr) {
//     if (start === nums.length) {
//       if (target === curr) res++
//       return
//     }
//     dfs(nums, start + 1, target, curr + nums[start])
//     dfs(nums, start + 1, target, curr - nums[start])
//   }

//   dfs(nums, 0, target, 0)
//   return res
// }

// 5 3  [-4-3-2-1 0 1 2 3 4]
// 5+3 /2 4

var findTargetSumWays = function (nums, target) {
  let res = 0
  function dfs(nums, start, target, curr) {
    if (start === nums.length) {
      if (target === curr) res++
      return
    }
    curr += nums[start]
    dfs(nums, start + 1, target, curr)
    curr -= nums[start]

    curr -= nums[start]
    dfs(nums, start + 1, target, curr)
    curr += nums[start]
  }
  dfs(nums, 0, target, 0)
  return res
}

const findTargetSumWays3 = (nums, target) => {
  const sum = nums.reduce((a, b) => a + b)

  if (Math.abs(target) > sum) {
    return 0
  }

  if ((target + sum) % 2) {
    return 0
  }

  const halfSum = (target + sum) / 2

  let dp = new Array(halfSum + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = halfSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[halfSum]
}

var findTargetSumWays2 = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b)

  if (Math.abs(target) > sum) {
    return 0
  }

  if ((target + sum) % 2) {
    return 0
  }

  const halfSum = (target + sum) / 2

  let dp = new Array(halfSum + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = halfSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  console.log(dp)
  return dp[halfSum]
}

let nums = [1, 1, 1, 1, 1]
console.log(findTargetSumWays2(nums, 3))
