// var findMaxAverage = function (nums, k) {
//   let q = []
//   let res = -Infinity
//   let sum = 0
//   for (let x of nums) {
//     if (q.length < k) {
//       q.push(x)
//       sum += x
//       continue
//     } else {
//       let pre = q.shift()
//       sum -= pre
//       q.push(x)
//       sum += x
//       res = Math.max(sum / q.length, res)
//       // [1,2,3,4]
//       // [2,3,4,5]
//     }

//     console.log(q)
//   }
//   return res
// }

var findMaxAverage = function (nums, k) {
  let sum = 0
  let max = -Infinity
  let start = 0
  let q = []
  for (let end in nums) {
    q.push(nums[end])
    sum += nums[end]
    if (q.length === k) {
      max = Math.max(max, sum / k)
      let start = q.shift()
      sum -= start
    }
  }
  return max
}

let nums = [4, 0, 4, 3, 3]
k = 5
console.log(findMaxAverage(nums, k))
