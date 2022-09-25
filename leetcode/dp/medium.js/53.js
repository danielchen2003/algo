// var maxSubArray = function (nums) {
//   let max = -Infinity
//   const helper = (arr) => {
//     if (arr === undefined || arr.length === 0) return 0
//     let sum = arr.reduce((pre, cur) => pre + cur, 0)
//     max = Math.max(max, sum)
//     return helper(arr.slice(0, arr.length - 1)) || helper(arr.slice[1])
//   }
//   helper(nums)
//   return max
// }

// console.log(a.reduce((a, b) => a + b, 0))
// const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0)
// console.log(sum) // 6

var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  return ans
}

var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = []
  for (let x of nums) {
    if (sum > 0) {
      sum.push(sum + x)
    } else {
      sum.push(x)
    }

    // ans = Math.max(ans, sum)
  }
  console.log(sum)
  return sum
}

function maxSubArray2(nums) {
  if (!nums.length) {
    return
  }
  // let cur = nums[0]
  // let nocur = nums[0]
  let arr = new Array(nums.length).fill(-Infinity)
  for (let i = 1; i < nums.length; i++) {
    //+cur
    //bujia + cur
    let bucur = arr[i - 1]
    let cur = arr[i - 1] + nums[i - 1]
    arr[i] = Math.max(bucur, cur)
  }
  console.log(arr)
  return arr[nums.length - 1]
}

let a = [100, -1, -2, 5, 3, -4]
console.log(maxSubArray2(a))

var maxSubArray = function (nums) {
  //维护两个
  let res = nums[0]
  let pre = 0
  for (let num of nums) {
    pre = Math.max(pre + num, num) //maxSum[m] = Math.max(maxSum[m - 1] + nums[m])
    res = Math.max(pre, res) //确定最终最大和
  }
  return res
}
