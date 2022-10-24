function xxx() {
  let stack = []
  for (let i = 0; i < nums.length; i++) {
    let cur = new TreeNode(nums[i])
    let curVal = nums[i]
    while (!stack.length === 0 && stack[stack.length - 1].val < curVal) {
      curVal.left = stack.pop()
    }
    if (!stack.length == 0) {
      stack[stack.length - 1].right = cur
    }
    stack.push(cur)
  }
  if (stack.length == 0) return null
  let res = null
  while (!stack.length == 0) {
    res = stack.pop()
  }
  return res
}
