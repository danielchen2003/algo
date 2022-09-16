var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr = arr.sort((a, b) => a - b)
  let res = 0
  let halflength = Math.floor(arr.length + 1 / 2)
  let halfmorelength = Math.ceil(arr.length + 1 / 2)
  console.log(arr)
  console.log(halflength, halfmorelength)
  if ((arr.length + 1) % 2 === 0) {
    res = (arr[halflength] + arr[halfmorelength]) / 2
  } else {
    res = arr[halfmorelength]
  }

  return res
}
// let nums1 = [1, 2]
// let nums2 = [3, 4]
// console.log(findMedianSortedArrays(nums1, nums2))
