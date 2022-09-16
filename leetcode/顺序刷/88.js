// var merge = function (nums1, m, nums2, n) {
//   let arr1 = nums1.slice(0, m)
//   let arr2 = nums2.slice(0, n)
//   let res = [...arr1, ...arr2]

//   res = res.sort((a, b) => {
//     return a - b
//   })
//   console.log(res)
//   return res
// }

// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1,
//     k = m + n - 1
//   while (i >= 0 || j >= 0) {
//     if (i < 0) nums1[k--] = nums2[j--]
//     else if (j < 0) nums1[k--] = nums1[i--]
//     else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--]
//     else nums1[k--] = nums1[i--]
//   }
//   return nums1
// }

//! 三个指针 i j  k
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1
  while (k !== 0) {
    if (i < 0) nums1[k--] = nums2[j--]
    else if (j < 0) nums1[k--] = nums1[i--]
    else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--]
    else nums1[k--] = nums1[i--]
  }
  return nums1
}

let arr1 = [1, 2, 3, 0, 0, 0]
let arr2 = [2, 5, 6]
// console.log([1, 2, 3, 4, 5].slice(0, 2))
console.log(merge(arr1, 3, arr2, 3))

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1
  let tail = m + n - 1
  var cur
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 === -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[tail--] = cur
  }
}
