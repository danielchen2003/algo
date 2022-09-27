let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]
let res = true
console.log(
  a.reduce((prev, curr) => {
    // console.log(prev)
    // console.log(curr)
    let level = prev >= curr ? false : true
    prev = level && prev
    return prev
  })
)
// console.log(true && false)
let d = null
function add(a, b) {
  console.log(d === null)
  return a + b + d
}

let c = add(1, 2)
console.log(c)
