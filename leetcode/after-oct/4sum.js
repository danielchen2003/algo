var fourSum = function (nums, target) {
  const len = nums.length
  if (len < 4) return []
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < len - 3; i++) {
    // 去重i
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      // 去重j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let l = j + 1,
        r = len - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          l++
          continue
        }
        if (sum > target) {
          r--
          continue
        }
        res.push([nums[i], nums[j], nums[l], nums[r]])
        while (l < r && nums[l] === nums[++l]);
        while (l < r && nums[r] === nums[--r]);
      }
    }
  }
  return res
}

var fourSum = function (nums, target) {
  let len = nums.length
  if (len < 4) return []
  nums.sort((a, b) => a - b)
  if (nums[0] > target && target > 0) return []
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let sum = nums[i] + nums[j]
      if (sum > target && target > 0) {
        break
      }
      let l = j + 1
      let r = len - 1
      while (l < r) {
        let totalSum = nums[i] + nums[j] + nums[l] + nums[r]
        if (totalSum === target) {
          res.push(nums[i], nums[j], nums[l], nums[r])
          while (nums[l] === nums[l + 1]) {
            l++
          }
          while ((nums[r] = nums[r - 1])) {
            r--
          }
          l++
          r--
        } else if (totalSum > target) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return res
}
