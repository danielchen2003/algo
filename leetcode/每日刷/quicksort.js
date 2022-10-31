function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end]
  let pivotIndex = start
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      ;[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]

      // Moving to next element
      pivotIndex++
    }
  }

  // Putting the pivot value in the middle
  ;[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
  return pivotIndex
}

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return
  }

  // Returns pivotIndex
  let index = partition(arr, start, end)

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1)
  quickSortRecursive(arr, index + 1, end)
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSortRecursive(array, 0, array.length - 1)

console.log(array)

//? 方法2
function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  stack = []

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0)
  stack.push(arr.length - 1)

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    end = stack.pop()
    start = stack.pop()

    pivotIndex = partition(arr, start, end)

    // If there are unsorted elements to the "left" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex - 1 > start) {
      stack.push(start)
      stack.push(pivotIndex - 1)
    }

    // If there are unsorted elements to the "right" of the pivot,
    // we add that subarray to the stack so we can sort it later
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1)
      stack.push(end)
    }
  }
}
