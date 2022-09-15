var maximumWealth = function (accounts) {
  let maxWealth = -Infinity
  for (const account of accounts) {
    maxWealth = Math.max(
      maxWealth,
      account.reduce((a, b) => a + b)
    )
  }
  return maxWealth
}

var numJewelsInStones = function (jewels, stones) {
  let arr = stones.split("")
  console.log(arr)
  const jew = jewels.split("")
  for (const i of arr) {
    for (const j of jew) {
      arr = arr.filter((x) => x !== j)
      console.log(j)
      console.log(arr)
    }
  }
  return arr.length
}

// console.log(numJewelsInStones("Aa", "aAAbbb"))

var createTargetArray = function (nums, index) {
  let res = []
  for (let i = 0; i < index.length; i++) {
    res.splice(index[i], 0, nums[i])
  }
  return res
}

let nums = [0, 1, 2, 3, 4]
let index = [0, 1, 2, 2, 1]

console.log(createTargetArray(nums, index))

var createTargetArray = function (nums, index) {
  var target = []

  for (var i = 0; i < nums.length; i++) {
    var idx = index[i]

    if (!target[idx] === undefined) {
      // 没有值直接插入元素，无需移动
      target[idx] = nums[i]
    } else {
      var len = target.length

      // 元素向后移动
      for (var j = len; j > idx; j--) {
        console.log(target)
        target[j] = target[j - 1]
      }

      // 插入元素
      target[idx] = nums[i]
    }
  }

  return target
}

// [4, 2, 1, 5, 2],[0,1,2,2,1]

// [4,2,1,1,4]

// nums = [0,1,2,3,4], index = [0,1,2,2,1]

// [0,4,1,3,2]

var trimMean = function (arr) {
  let len = arr.length
  let pre = Math.floor(len * 0.05)
  console.log(len, pre)
  arr = arr.sort((a, b) => a - b)
  // slice(1,20-1)
  arr = arr.slice(pre + 1, len - pre)
  let res = arr.reduce((a, b) => a + b) / arr.length
  return res.toPrecision(5)
}
const arr = [
  6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3,
  8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
]

console.log(trimMean(arr))
arr2 = [1, 2, 3, 4, 5, 6]
arr2 = arr2.slice(2, 5)
console.log(arr2)
