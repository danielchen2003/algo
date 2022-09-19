var sortColors = function (nums) {
  let len = nums.length
  let pre
  let cur
  for (let i = 1; i < len; i++) {
    pre = i - 1
    cur = arr[i]
    while (pre >= 0 && nums[pre] > cur) {}
  }
}

function insertionSort(arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

var sortArray = function (arr) {
  let nums = [...arr]

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    let j = i
    while (temp <= nums[j] && j >= 0) {
      // console.log(nums)
      // nums.splice(j, 1, temp)
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = temp
    // nums.splice(j, 0, temp)
  }
  return nums
}

var sortArray = function (arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      // console.log(arr[preIndex + 1])
      // 想后面一位置 大家一起整体向右边移动，直到找到应该在的位置
      console.log(arr)

      arr[preIndex + 1] = arr[preIndex]
      // console.log([arr[preIndex + 1], arr[preIndex]])
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

let a = [1, 2, 3, 4, 5, 3][
  //       [1,2,3,4,5,5]
//   (1, 2, 3, 4, 4, 5)
// ][(1, 2, 3, 3, 4, 5)]
// [1,2,3,,4,5]
console.log(sortArray(a))
