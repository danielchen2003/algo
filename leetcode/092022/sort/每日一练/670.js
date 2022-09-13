var maximumSwap = function (num) {
  let str = String(num)
  const numarr = str.split("").map((x) => x * 1)
  return numarr.sort((a, b) => b - a).join("")
}

//暴力 用map 记录

//贪心算法

// 反向sort

var maximumSwap = function (num) {
  let str = String(num)
  const numarr = str.split("").map((x) => x * 1)
  // maxswap = -Infinity
  // for (let i of numarr) {
  //   maxswap = Math.max(maxswap, i)
  // }
  let max = num
  for (let i = 0; i < numarr.length - 1; i++) {
    for (let j = i + 1; j < numarr.length; j++) {
      if (numarr[i] < numarr[j]) {
        swap(numarr, i, j)
        max = Math.max(max, numarr.join(""))
        swap(numarr, i, j)
      }
    }
  }
  return max
}
// function swap(arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

var maximumSwap = function (num) {
  const charArray = [...("" + num)]
  const n = charArray.length
  let maxNum = num
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(charArray, i, j)
      maxNum = Math.max(maxNum, parseInt(charArray.join("")))
      swap(charArray, i, j)
    }
  }
  return maxNum
}

const swap = (charArray, i, j) => {
  const temp = charArray[i]
  charArray[i] = charArray[j]
  charArray[j] = temp
}

let num = 2736
console.log(maximumSwap(num))

var maximumSwap = function (num) {
  num = (num + "").split("").map((i) => +i)
  let last = -1,
    lastMax = -1,
    max = -1
  for (let i = num.length - 1; i >= 0; i--) {
    if (max !== -1 && num[i] < num[max]) {
      last = i
      lastMax = max
    }
    if (max === -1 || num[i] > num[max]) max = i
  }
  if (last !== -1) [num[last], num[lastMax]] = [num[lastMax], num[last]]
  return +num.join("")
}

var maximumSwap = function (num) {
  const charArray = [...("" + num)]
  const n = charArray.length
  let maxIdx = n - 1
  let idx1 = -1,
    idx2 = -1
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }
  if (idx1 >= 0) {
    swap(charArray, idx1, idx2)
    return parseInt(charArray.join(""))
  } else {
    return num
  }
}

const swap = (charArray, i, j) => {
  const temp = charArray[i]
  charArray[i] = charArray[j]
  charArray[j] = temp
}
