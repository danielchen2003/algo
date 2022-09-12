// a = 1
// b = 2
// console.log(a, b)
// a = a ^ b
// console.log(a, b)
// b = a ^ b
// console.log(a, b)

// a = a ^ b
// console.log(a, b)

var sortColors = function (nums) {
  const limian = []
  const waimian = []
  for (let i = 0; i < nums.length - 1; i++) {
    //初诗的指
    //这里的q是永远的首位的i并且跟着i走
    //？ 因为current i位置的数字不是固定的！！！！！
    //比如噢  第一循环里面 [4,3,2,1]
    // 已进入第二层 4> 3 必须交换 3,4
    //   从内层读数字是[3,4,2,1]
    //但是因为你复植在外层已经不能变了故 外层的nums[i]依然是4 ??
    let q = nums[i]
    console.log(q)
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(q + `外面q` + nums[i] + `里面q`)
      waimian.push(q)

      let cur = nums[i]
      // console.log(cur)
      limian.push(cur)
      let h = nums[j]
      if (q > h) {
        swap(nums, i, j)
      }
    }
  }
  console.log(limian)
  console.log(waimian)
  return nums
}

let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}
//
console.log(sortColors([4, 0, 5, 2, 1, 0]))
