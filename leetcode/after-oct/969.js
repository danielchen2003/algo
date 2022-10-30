function pancakeSort1(arr) {
  function flip(arr, end) {
    let i = 0
    let j = end

    while (i <= j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i += 1
      j -= 1
    }
  }
  // your code goes here

  for (let j = arr.length - 1; j >= 1; j--) {
    let index = 0
    for (let i = 0; i <= j; i++) {
      if (arr[i] > arr[index]) {
        index = i
      }
    }
    flip(arr, index)
    flip(arr, j)
  }
  console.log(arr)
  return arr
}

var pancakeSort3 = function (arr) {
  const ret = []
  for (let n = arr.length; n > 1; n--) {
    let index = 0
    for (let i = 1; i < n; i++) {
      if (arr[i] >= arr[index]) {
        index = i
      }
    }
    if (index === n - 1) {
      continue
    }
    reverse(arr, index)
    reverse(arr, n - 1)
  }
  // console.log(arr)
  return arr
}

const reverse = (arr, end) => {
  for (let i = 0, j = end; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

let nums = [3, 2, 4, 1]
pancakeSort1(nums)
