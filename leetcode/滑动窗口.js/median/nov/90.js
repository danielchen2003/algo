var subsetsWithDup = function (nums) {
  let result = []
  let path = []
  let sortNums = nums.sort((a, b) => {
    return a - b
  })
  let used = new Array(nums.length).fill(false)
  function backtracing(startIndex, sortNums, used) {
    result.push([...path])
    if (startIndex > nums.length - 1) {
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue
      }
      used[i] = true
      path.push(nums[i])
      backtracing(i + 1, sortNums, used)
      used[i] = false
      path.pop()
    }
  }

  backtracing(0, sortNums, used)
  console.log(result)
  return result
}
let nums1 = [1, 2, 2]
// 不用used [[],[1],[1,2],[1,2,2],[2],[2,2]]
//用used [
//   [],       [ 1 ],
//   [ 1, 2 ], [ 1, 2, 2 ],
//   [ 1, 2 ], [ 2 ],
//   [ 2, 2 ], [ 2 ]
// ]
//非同一个位置的2 比如 122 第二个 第三个 作为单独一个[2] 返回
let nums2 = [1, 2, 3]

let nums3 = [1, 1, 1]
// 不用use 1 1 1 作为单独答案返回
// [
//   [],       [ 1 ],
//   [ 1, 1 ], [ 1, 1, 1 ],
//   [ 1, 1 ], [ 1 ],
//   [ 1, 1 ], [ 1 ]
// ]
// 用了used 1 1 1 视为一个结果[1] 1个1 两个1 三个1
let nums4 = [4]
subsetsWithDup(nums3)

let a = 3
let b = 3
if (a > 1) {
  //如果a>1   并且 a ！==5 那么 b =1
  if (a !== 5) {
    b = 1
  }
}
// 如果 a？ 1 并且 a！==5 那么b=1
// if (a > 1 && a !== 5) {
//   b = 1
// }
console.log(a, b)
