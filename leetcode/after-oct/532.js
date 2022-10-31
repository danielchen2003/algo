// def findPairs(self, nums: List[int], k: int) -> int:
// if k<0:
//     return 0
// saw, diff = set(), set()
// for i in nums:
//     if i-k in saw:
//         diff.add(i-k)
//     if i+k in saw:
//         diff.add(i)
//     saw.add(i)
// return len(diff)

// function x(arr, k) {
//   if (k < 0) return 0
//   let saw = new Set()
//   let diff = new Set()
//   for (let num of arr) {
//     if (num - k in saw) {
//       diff.add(num - k)
//     }
//     if (nums + k in saw) {
//       diff.add(num)
//     }
//     saw.add(num)
//   }
//   console.log(saw)
//   return diff.length
// }

// var findPairs = function (nums, k) {
//   const visited = new Set([...nums])
//   const res = new Set()
//   for (const num of nums) {
//     if (visited.has(num - k)) {
//       res.add(num - k)
//     }
//     if (visited.has(num + k)) {
//       res.add(num + k)
//     }
//   }
//   console.log(res)
//   return res.size
// }

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
    mySet.set(guessY, x)
  }

  for (let i = 0; i < arr.length; i++) {
    let y = arr[i]
    // console.log(y)
    if (y in mySet) {
      let x = mySet[y]
      output.push([x, y])
    }
  }
  console.log(mySet)
  console.log(3 in mySet)
  return output
}

//  [1, -1 2, -1, 3]  如果有这些数字那么久推进去[1]
let nums = [3, 1, 4, 1, 5, 7]
// 1 3 5 7
//  [5,3,6,3,7]
findPairsWithGivenDifference(nums, 2)

let user = {
  name: "Balaji",
  age: 23,
  greet: () => "Hello",
}
console.log(user.size())

for (let key in Object.entries(user)) {
}
