let test0 = [1, 2, 1, 0, 2, 0] //[001122]
let test1 = [1, 2, 3, 6, 3, 2, 1]
let test2 = [1, 2, 3, 4, 5, 6, 7]
let test3 = []
let test4 = [1]
let test5 = [0, 2, 1, 4, 5, 6, 1, 0, 2, 3, 4]
let test6 = [243, 45, 23, 356, 3, 5346, 35, 5]
// var arr = [243, 45, 23, 356, 3, 5346, 35, 5];

/* BubbleSort(array){
  for i -> 0 to arrayLength
     isSwapped <- false
     for j -> 0 to (arrayLength - i - 1)
      if arr[j] > arr[j + 1]
        swap(arr[j], arr[j + 1])
        isSwapped -> true
}
*/
function bubbleSort(arr) {
  //从头到尾无数次检查arr 相邻两个数字是否为递增
  const len = arr.length
  var isSwapped = false

  for (let i = 0; i < len; i++) {
    isSwapped = false
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isSwapped = true
        //? 已经没有交换了,跳出循环
      }
    }
    // IF no two elements were swapped by inner loop, then break

    if (!isSwapped) {
      break
    }
  }
  return arr
}
console.log(insertSort(test0))
console.log(`----------test0---------`)
console.log(insertSort(test1))
console.log(`----------test1---------`)
console.log(insertSort(test2))
console.log(`----------test2---------`)
console.log(insertSort(test3))
console.log(`----------test3---------`)

console.log(insertSort(test4))
console.log(`----------test4---------`)
console.log(insertSort(test5))
console.log(`----------test5---------`)
console.log(insertSort(test6))
console.log(`----------test6---------`)
// function swap(arr, i, j) {
//   arr[i] = arr[i] ^ arr[j]
//   arr[j] = arr[i] ^ arr[j]
//   arr[i] = arr[i] ^ arr[j]
// }

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// function assert(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(insertSort("test" + `1`))
//   }
//   return `finish`
// }
// assert(7)

function insertSort(arr) {
  let length = arr.length
  if (arr === undefined || arr === null) return null
  if (length <= 1) return arr
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

var selectSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let q = nums[i]
      let h = nums[j]
      if (q > h) {
        swap(nums, i, j)
      }
    }
  }
  return nums
}
