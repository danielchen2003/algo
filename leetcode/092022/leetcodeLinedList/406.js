var reconstructQueue = function (people) {
  let q = []
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0]
    } else {
      return a[1] - b[1]
    }
  })
  console.log(people)
  for (let i = 0; i < people.length; i++) {
    // q.splice(people[i][1], 0, people[i])
    q.splice(people[i][1], 0, people[i])
  }
  return q
}

// var reconstructQueue = function (people) {
//   let queue = []
//   people.sort((a, b) => {
//     if (b[0] !== a[0]) {
//       return b[0] - a[0]
//     } else {
//       return a[1] - b[1]
//     }
//   })

//   for (let i = 0; i < people.length; i++) {
//     console.log(queue)
//     queue.splice(people[i][1], 0, people[i])
//   }
//   // return queue
// }

let people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]
console.log(reconstructQueue(people))[(1, 2, 3, 4, 5, 6, 7)][(0, 1, 2, 3, 4)]
