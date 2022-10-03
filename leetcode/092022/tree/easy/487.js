var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let map = {}
  let start = 0
  for (let end of nums) {
    let tail = nums[end]
    map[tail] = (map[tail] || 0) + 1
    if (map.get(0, 0) <= 1) max = Math.max(max, end - start + 1)
    while (map.get(0, 0) > 1) {
      let head = nums[start]
      map[head] -= 1
      start += 1
    }
  }
  return max
}
//         [1 1 1 0 1]
// nums = [1, 0, 1, 1, 0 ,1]

// # 定义需要维护的变量
// # 因为是求最大长度，所以有max_len，又同时涉及计数 (0的个数不能超过1个)，所以还要一个哈希表
// max_len, hashmap = 0, {}

// # Step 2: 定义窗口的首尾端 (start, end)， 然后滑动窗口
// start = 0
// for end in range(len(nums)):
//     # Step 3: 更新需要维护的变量 (hashmap， max_len)
//     tail = nums[end]
//     hashmap[tail] = hashmap.get(tail, 0) + 1
//     if hashmap.get(0, 0) <= 1:
//         max_len = max(max_len, end - start + 1)

//     # Step 4
//     # 根据题意,  题目的窗口长度可变: 这个时候一般涉及到窗口是否合法的问题
//     # 这时要用一个while去不断移动窗口左指针, 从而剔除非法元素直到窗口再次合法
//     # 当hashmap里面0的个数大于1的时候，窗口不合法
//     # 所以需要不断移动窗口左指针直到窗口再次合法, 同时提前更新需要维护的变量 (hashmap)
//     while hashmap.get(0, 0) > 1:
//         head = nums[start]
//         hashmap[head] -= 1
//         start += 1
// # 返回最大长度
// return max_len

// 作者：eason734
// 链接：https://leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters/solution/hua-dong-chuang-kou-zhen-di-jian-dan-yi-73bii/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var findMaxConsecutiveOnes = function (nums) {
  let sum = 0
  // l,r为左右边界，在边界内最多允许有一个0
  for (var l = 0, r = 0; r < nums.length; r++) {
    //还没超过一个0，r++
    sum += nums[r]
    if (r - l > sum) {
      //此时超过一个0了，l++ r++左右边界同时增加
      sum -= nums[l]
      l++
    }
  }
  //最后返回lr的距离即可
  return r - l
}

var findMaxConsecutiveOnes = function (nums) {
  let dp = []
  let n = nums.size()
  let dp0 = 0,
    dp1 = 0 //dp0未使用过翻转机会，dp1使用过翻转机会
  let ans = 0
  for (let i = 0; i < nums.size(); i++) {
    if (nums[i] !== 0) {
      //无需翻转，不收影响
      dp0++
      dp1++
    } else {
      //需要翻转
      dp1 = dp0 + 1 //有翻转机会，从dp0到dp1
      dp0 = 0 //积累的1个数置0；
    }
    ans = max(ans, dp1) // dp1 >= dp0
  }
  return ans
}
