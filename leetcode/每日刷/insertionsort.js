function insertionSort(inputArr) {
  let n = inputArr.length
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i]
    // The last element of our sorted subarray
    let j = i - 1
    while (j > -1 && current < inputArr[j]) {
      console.log(inputArr)
      inputArr[j + 1] = inputArr[j]
      j--
    }
    inputArr[j + 1] = current
  }
  return inputArr
}

let arr = [3, 2, 1]
insertionSort(arr)
let res = []
res.push(" ".repeat(2))
console.log(res)
