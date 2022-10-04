const findLength = (A, B) => {
  // A、B数组的长度
  const [m, n] = [A.length, B.length]
  // dp数组初始化，都初始化为0
  const dp = new Array(m + 1).fill(0).map((x) => new Array(n + 1).fill(0))
  // 初始化最大长度为0
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 遇到A[i - 1] === B[j - 1]，则更新dp数组
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      // 更新res
      res = Math.max(dp[i][j], res)
    }
  }
  // 遍历完成，返回res
  return res
}

const findLength = (A, B) => {
  let [m, n] = [A.length, B.length]
  let dp = new Array(m + 1).fill(0).map((j) => new Array(n + 1).fill(0))
  let res = 0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      res = Math.max(dp[i][j], res)
    }
  }
  return res
}

const findLength = (nums1, nums2) => {
  let [m, n] = [A.length, B.length]
  let dp = new Array(m + 1).fill(0)
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = n; j > 0; j--) {
      if (nums[i - 1] === nums[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
    }
    res = Math.max(dp[i][j], res)
  }
  return res
}
;(4)[44123][11234]
2

const findLength = (nums1, nums2) => {
  let len1 = nums1.length,
    len2 = nums2.length
  // dp[i][j]: 以nums1[i-1]、nums2[j-1]为结尾的最长公共子数组的长度
  let dp = new Array(len1 + 1).fill(0)
  let res = 0
  for (let i = 1; i <= len1; i++) {
    for (let j = len2; j > 0; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      res = Math.max(res, dp[j])
    }
  }
  return res
}
