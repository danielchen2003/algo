// Given an array of objects summarizing the number of fish in an aquarium,
// find the percent of fish where the species is unknown (the `species` is
// `undefined`). Return the percentage as a whole number between `0` and `100`.

// Example input:
let fish = [
  { species: "Swordtail", count: 2 },
  { species: "Pearl Gourami", count: 1 },
  { species: "Rummynose Tetra", count: 12 },
  { species: "Neon Tetra", count: 30 },
  { species: "Guppy", count: 8 },
  { species: "Kribensis", count: 1 },
  { species: "Angelfish", count: 1 },
  { species: undefined, count: 5 },
]

// Example output:
// 8

function calculateUnknow(obj) {
  let totalFish = 0
  let unknowFish = 0
  for (let i = 0; i < obj.length; i++) {
    totalFish += obj[i].count
    if (typeof obj[i].species === "undefined") {
      unknowFish += obj[i].count
    }
  }

  // console.log(`wft` + unknowFish)
  const result = parseInt((unknowFish / totalFish) * 100) + "%"
  return result
}
console.log(calculateUnknow(fish))

// function calculateUnknow(obj) {
//   const total2 = fish.reduce((prev, curr) => prev + curr.count, 0)
//   console.log("total2", total2)

//   const unknown2 = fish.reduce((prev, curr) => {
//     if (curr.species === undefined) return prev + curr.count
//     else return prev + 0
//   }, 0)

//   const result = parseInt((unknown2 / total2) * 100) + "%"
//
//   return result
// }

// Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
// Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), returns the day of the week that is K day later.

// For example, given S = "Wed" and K = 2, the function should return "Fri".

// Given S = "Sat" and K = 23, the function should return "Mon".

// function daysOfWeek(S, K) {
//   //code here
//   const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//   const reminder = K % 7
//   let currentday
//   for (i = 0; i < week.length; i++) {
//     if (week[i] === S) {
//       currentday = i
//     }
//   }
//   result = currentday + reminder
//   if (result <= 6) {
//     return week[result]
//   }
//   if (result > 6) {
//     return week[result - 7]
//   }
// }

// console.log(daysOfWeek("Sat", 23))
// console.log(daysOfWeek("Wed", 2))

// function daysOfWeek(S, K) {
//   //code here
//   const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//   let currentday = week.indexOf(S)

//   const reminder = (currentday + K) % 7

//   return week[reminder]
// }
