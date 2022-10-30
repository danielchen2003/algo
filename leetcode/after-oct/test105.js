function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  const output = []
  const mySet = new Map()

  if (k == 0) {
    return []
  }

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    let guessY = x - k
    mySet[guessY] = x
  }

  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    if (y in mySet) {
      let x = mySet[y]
      output.push([x, y])
    }
  }
  console.log(mySet)
  console.log(output)
  return output
}

let arr = [0, -1, -2, 2, 1]
findPairsWithGivenDifference(arr, 1)
