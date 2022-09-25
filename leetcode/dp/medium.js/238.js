var productExceptSelf = function (nums) {
  let res = nums.map((x, i) => {
    return (x = nums.reduce((pre, cur, j) => {
      return (pre *= j == i ? 1 : cur)
    }, 1))
  })
  console.log(res)
  return res
}

var productExceptSelf2 = function (nums) {
  let res = [1]
  let curr = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //左边元素乘积
    res[i] = curr
    curr *= nums[i]
  }

  curr = nums[nums.length - 1]
  for (i = nums.length - 2; i >= 0; i--) {
    //右边的乘
    res[i] *= curr
    curr *= nums[i]
  }
  console.log(res)
  return res
}

// [1,1,2,6]
// [   24  12 4,1]
//[24,12,8,7]

var productExceptSelf2 = function (nums) {
  let res = [1]
  let curr = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //左边元素乘积
    res[i] = curr
    curr *= nums[i]
  }

  curr = nums[nums.length - 1]
  for (i = nums.length - 2; i >= 0; i--) {
    //右边的乘
    res[i] *= curr
    curr *= nums[i]
  }
  console.log(res)
  return res
}

var productExceptSelf3 = function (nums) {
  let res = [1]
  let curr = nums[0]
  // [1,2,3,4] len =4
  for (let i = 1; i < nums.length; i++) {
    // console.log(curr)
    res[i] = curr //先更新dp
    curr *= nums[i] //再更新cur
  }
  //       cur
  // [1,2,3,4]
  curr = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    res[i] *= curr //先更新dp
    curr *= nums[i] //再更新cur
  }
  console.log(res)
  return res
}

let n = [1, 2, 3, 4]
productExceptSelf3(n)

var productExceptSelf4 = function (nums) {
  const length = nums.length

  // L 和 R 分别表示左右两侧的乘积列表
  const L = new Array(length)
  const R = new Array(length)

  const answer = new Array(length)

  // L[i] 为索引 i 左侧所有元素的乘积
  // 对于索引为 '0' 的元素，因为左侧没有元素，所以 L[0] = 1
  L[0] = 1
  for (let i = 1; i < length; i++) {
    L[i] = nums[i - 1] * L[i - 1]
  }
  // console.log(L)
  // R[i] 为索引 i 右侧所有元素的乘积
  // 对于索引为 'length-1' 的元素，因为右侧没有元素，所以 R[length-1] = 1
  R[length - 1] = 1
  for (let i = length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1]
  }
  // console.log(R)
  // 对于索引 i，除 nums[i] 之外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
  for (let i = 0; i < length; i++) {
    answer[i] = L[i] * R[i]
  }
  console.log(answer)
  return answer
}
// let n = [1, 2, 3, 4]
productExceptSelf4(n)
let result = n.forEach((x) => {
  return x * 2
})
console.log(result)
